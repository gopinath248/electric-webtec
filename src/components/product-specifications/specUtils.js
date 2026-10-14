const IMPORTANT_SPEC_LABELS = new Set(["power", "voltage", "phase", "frequency"]);

function toNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const normalized = value.replace(/[^0-9.]/g, "");
    if (!normalized) {
      return 0;
    }

    const parsed = Number.parseFloat(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
}

export function createSpecKey(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeImageList(images) {
  if (!Array.isArray(images)) {
    return [];
  }

  return Array.from(
    new Set(
      images
        .map((image) => (typeof image === "string" ? image.trim() : ""))
        .filter(Boolean)
    )
  );
}

export function normalizeSpecRows(specs) {
  if (Array.isArray(specs)) {
    return specs
      .map((spec) => {
        if (!spec || typeof spec !== "object") {
          return null;
        }

        const label = String(spec.label ?? "").trim();
        const value = spec.value == null ? "" : String(spec.value).trim();

        if (!label && !value) {
          return null;
        }

        return { label, value };
      })
      .filter(Boolean);
  }

  if (specs && typeof specs === "object") {
    return Object.entries(specs)
      .map(([label, value]) => ({
        label: String(label).trim(),
        value: value == null ? "" : String(value).trim()
      }))
      .filter((spec) => spec.label);
  }

  return [];
}

function inferSpecsFromProduct(product = {}) {
  const text = `${product.name ?? ""} ${product.description ?? ""}`.toLowerCase();
  const isThreePhase = /three phase|3 phase|415v/.test(text);
  const isSinglePhase = /single phase|230v/.test(text);
  const hpMatch = text.match(/(\d+(?:\.\d+)?)\s*hp/);

  const power = hpMatch
    ? `${hpMatch[1]} HP`
    : isThreePhase
      ? "3 HP - 10 HP"
      : "1 HP - 5 HP";

  const voltage = isThreePhase ? "415V" : "220-240V";
  const phase = isThreePhase ? "Three Phase" : isSinglePhase ? "Single Phase" : "Single / Three Phase";
  const frequency = /60hz/.test(text) ? "60 Hz" : "50 Hz";
  const mounting = /panel/.test(text) ? "Panel Mount" : /din/.test(text) ? "DIN Rail" : "Wall Mount";
  const enclosure = /abs/.test(text)
    ? "ABS"
    : /steel|metal|crca/.test(text)
      ? "Metal"
      : "Industrial Grade";

  const extras = [];
  if (/dry run/.test(text)) {
    extras.push({ label: "Protection", value: "Dry Run" });
  } else {
    extras.push({ label: "Protection", value: "Overload & Short Circuit" });
  }

  if (/gsm|mobile/.test(text)) {
    extras.push({ label: "Connectivity", value: "GSM Enabled" });
  } else if (/drive/.test(text)) {
    extras.push({ label: "Control", value: "Variable Speed" });
  } else {
    extras.push({ label: "Mounting", value: mounting });
  }

  extras.push({ label: "Enclosure", value: enclosure });

  return [
    { label: "Power", value: power },
    { label: "Voltage", value: voltage },
    { label: "Phase", value: phase },
    { label: "Frequency", value: frequency },
    ...extras
  ];
}

export function formatPrice(price) {
  const numeric = toNumber(price);

  if (!numeric) {
    return "Get Best Price";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(numeric);
}

export function isImportantSpecLabel(label) {
  return IMPORTANT_SPEC_LABELS.has(createSpecKey(label));
}

export function findProductSpecOverride(items, product) {
  const targetKeys = [
    product?.slug,
    product?.name,
    product?.id,
    product?._id
  ]
    .map((value) => createSpecKey(value))
    .filter(Boolean);

  if (targetKeys.length === 0) {
    return null;
  }

  return (
    items.find((item) => {
      const candidateKeys = [
        item?.id,
        item?.slug,
        item?.sourceSlug,
        item?.name
      ]
        .map((value) => createSpecKey(value))
        .filter(Boolean);

      return candidateKeys.some((candidateKey) => targetKeys.includes(candidateKey));
    }) ?? null
  );
}

export function buildProductSpecRecord(product = {}, override = {}) {
  const category = override.category ?? product.category ?? "product";
  const mergedConditions = {
    showSpecs: true,
    showPrice: true,
    showContactCTA: true,
    ...(override.conditions ?? {}),
    ...(product.conditions ?? {})
  };

  if (category === "service") {
    mergedConditions.showSpecs = false;
    mergedConditions.showPrice = false;
  }

  const specs = normalizeSpecRows(override.specs ?? product.specs ?? product.specifications);
  const resolvedSpecs = specs.length > 0 ? specs : inferSpecsFromProduct({ ...product, ...override });
  const imageList = normalizeImageList([
    ...(override.conditions?.images ?? []),
    ...(override.images ?? []),
    ...(product.conditions?.images ?? []),
    ...(product.images ?? []),
    ...(product.image ? [product.image] : [])
  ]);

  return {
    id: override.id ?? product.id ?? product._id ?? createSpecKey(product.slug ?? product.name),
    name: override.name ?? product.name ?? "",
    category,
    price: toNumber(override.price ?? product.price),
    specs: resolvedSpecs,
    conditions: mergedConditions,
    description: override.description ?? product.description ?? "",
    images: imageList,
    categoryLabel: override.categoryLabel ?? product.categoryLabel ?? product.categoryName ?? "",
    categorySlug: override.categorySlug ?? product.categorySlug ?? "",
    slug: override.slug ?? product.slug ?? createSpecKey(product.name),
    ctaHref: override.ctaHref ?? product.ctaHref ?? "",
    ctaLabel: override.ctaLabel ?? "Get Best Price"
  };
}

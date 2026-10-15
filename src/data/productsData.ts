import { ProductCategory, ProductItem } from '../types';

// Category Banner & Thumbnail Images
import catSteelImg from '../assets/images/cat_steel_reinforcement_1785872030374.jpg';
import catBlocksImg from '../assets/images/cat_blocks_masonry_1785872044298.jpg';
import catCementImg from '../assets/images/cat_cement_concrete_1785872055632.jpg';
import catSandImg from '../assets/images/cat_sand_aggregates_1785872065826.jpg';
import catTimberImg from '../assets/images/cat_plywood_timber_1785872076388.jpg';
import catPlumbingImg from '../assets/images/cat_plumbing_materials_1785872087638.jpg';
import catWaterImg from '../assets/images/cat_water_tanks_systems_1785872098660.jpg';
import catElectricalImg from '../assets/images/cat_electrical_materials_1785872110636.jpg';
import catChemicalsImg from '../assets/images/cat_chemicals_1785872134131.jpg';
import catTilesImg from '../assets/images/cat_tiles_flooring_1785872146029.jpg';
import catPaintsImg from '../assets/images/cat_paints_coatings_1785872156824.jpg';
import catGypsumImg from '../assets/images/cat_gypsum_ceiling_1785872168418.jpg';
import catMeshImg from '../assets/images/cat_mesh_accessories_1785872179439.jpg';
import catManholeImg from '../assets/images/cat_manhole_drainage_1785872190600.jpg';
import catMachineryImg from '../assets/images/cat_machinery_equipment_1785872202413.jpg';
import catGeneratorsImg from '../assets/images/cat_generators_power_1785872214344.jpg';
import catSafetyImg from '../assets/images/cat_safety_products_1785872227442.jpg';
import catToolsImg from '../assets/images/construction_power_tools_1785868683975.jpg';
import catGeneralImg from '../assets/images/chainlink_hoarding_fence_1785868790210.jpg';

// Dedicated Product Detail Images
import deformedRebarImg from '../assets/images/deformed_steel_rebars_1787003263600.jpg';
import brcMeshImg from '../assets/images/brc_fabric_mesh_1787003276409.jpg';
import wireNailsImg from '../assets/images/hardware_wire_nails_1785868765927.jpg';
import interlockBlocksImg from '../assets/images/interlock_paving_blocks_1785868726941.jpg';
import portlandCementImg from '../assets/images/portland_cement_bags_1785868714839.jpg';
import phenolicPlywoodImg from '../assets/images/phenolic_film_plywood_1785868633935.jpg';
import whiteWoodImg from '../assets/images/white_wood_timber_1785868619105.jpg';
import scaffoldPlanksImg from '../assets/images/scaffold_wooden_planks_1785868738688.jpg';
import pprPlumbingImg from '../assets/images/ppr_plumbing_fittings_1785868802003.jpg';
import solarHeaterImg from '../assets/images/solar_heater_water_tanks_1785868814739.jpg';
import electricalCablesImg from '../assets/images/electrical_cables_wiring_1785868669158.jpg';
import gypsumBoardsImg from '../assets/images/gypsum_boards_partition_1785868753904.jpg';

/**
 * MASTER LIST OF PRODUCT CATEGORIES (Single Source of Truth)
 * Exactly 19 unique categories sequentially indexed from 1 to 19.
 */
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'steel-reinforcement-products',
    serialNumber: 1,
    name: 'Steel & Reinforcement Products',
    slug: 'steel-reinforcement-products',
    description: 'High-yield deformed steel rebars, BRC welded wire mesh, tie wire, GI lintels, and structural reinforcement accessories.',
    iconName: 'Shield',
    image: catSteelImg,
    subcategories: [
      'Deformed Steel Rebars (8mm - 32mm)',
      'BRC Welded Fabric Mesh (A142, A193, A252, A393)',
      'Black Annealed & GI Binding Wire',
      'GI Lintels & Steel Channels',
      'Rebar Couplers & Dowel Bars'
    ]
  },
  {
    id: 'blocks-masonry-products',
    serialNumber: 2,
    name: 'Blocks & Masonry Products',
    slug: 'blocks-masonry-products',
    description: 'Comprehensive masonry solutions including hollow blocks, solid blocks, lightweight thermal AAC blocks, and interlock pavers.',
    iconName: 'Box',
    image: catBlocksImg,
    subcategories: [
      'Concrete Hollow Blocks (4", 6", 8")',
      'Concrete Solid Blocks (4", 6", 8")',
      'Autoclaved Aerated Concrete (AAC) Blocks',
      'Interlocking Paving Tiles & Kerbstones',
      'Masonry Joint Reinforcement Wire'
    ]
  },
  {
    id: 'cement-concrete-products',
    serialNumber: 3,
    name: 'Cement & Concrete Products',
    slug: 'cement-concrete-products',
    description: 'Certified Ordinary Portland Cement (OPC), Sulphate Resistant Cement (SRC), Portland Limestone Cement (PLC), and concrete spacers.',
    iconName: 'Layers',
    image: catCementImg,
    subcategories: [
      'Ordinary Portland Cement (OPC 42.5N / 52.5N)',
      'Sulphate Resistant Cement (SRC)',
      'Portland Limestone Cement (PLC)',
      'White Portland Cement',
      'Concrete Cover Spacers & Plastic Shims'
    ]
  },
  {
    id: 'sand-aggregates-road-materials',
    serialNumber: 4,
    name: 'Sand, Aggregates & Road Materials',
    slug: 'sand-aggregates-road-materials',
    description: 'Bulk delivery of washed plastering black sand, white dune sand, crushed stone aggregates, sub-base gravel, and road materials.',
    iconName: 'Mountain',
    image: catSandImg,
    subcategories: [
      'Washed Black Sand (Plastering & Masonry)',
      'Red / White Dune Filling Sand',
      '3/8" (10mm) Crushed Aggregate',
      '3/4" (20mm) Coarse Aggregate',
      'Road Base & Wet Mix Sub-base Aggregate'
    ]
  },
  {
    id: 'plywood-timber-products',
    serialNumber: 5,
    name: 'Plywood & Timber Products',
    slug: 'plywood-timber-products',
    description: 'Phenolic film-faced shuttering plywood, commercial plywood, white wood timber beams, and scaffolding timber planks.',
    iconName: 'TreePine',
    image: catTimberImg,
    subcategories: [
      'Film Faced Shuttering Plywood (18mm, 12mm)',
      'Commercial Marine & Commercial Plywood',
      'White Wood Lumber (2x2, 2x3, 2x4, 3x3)',
      'Wooden Scaffolding Planks (38x225mm)',
      'MDF Boards & Hardboard Sheets'
    ]
  },
  {
    id: 'plumbing-materials',
    serialNumber: 6,
    name: 'Plumbing Materials',
    slug: 'plumbing-materials',
    description: 'Complete piping solutions including PPR hot and cold water pipes, UPVC drainage systems, valves, and brass compression fittings.',
    iconName: 'Droplet',
    image: catPlumbingImg,
    subcategories: [
      'PPR Hot & Cold Water Pipes (PN20/PN25)',
      'UPVC Drainage & Soil Waste Pipes',
      'PEX-AL-PEX Multilayer Tubing',
      'Brass Gate Valves & Ball Valves',
      'Solvent Cements, Primers & PTFE Teflon Tape'
    ]
  },
  {
    id: 'water-tanks-water-systems',
    serialNumber: 7,
    name: 'Water Tanks & Water Systems',
    slug: 'water-tanks-water-systems',
    description: 'Multi-layer anti-bacterial polyethylene water storage tanks, GRP sectional tanks, solar water heaters, and booster water pumps.',
    iconName: 'Waves',
    image: catWaterImg,
    subcategories: [
      'Multi-Layer Polyethylene Water Tanks (200 - 5000 Gal)',
      'GRP Sectional Panel Water Tanks',
      'Solar Thermal Water Heating Systems',
      'Automatic Domestic Booster & Submersible Pumps',
      'Float Switches & Water Level Controllers'
    ]
  },
  {
    id: 'electrical-materials',
    serialNumber: 8,
    name: 'Electrical Materials',
    slug: 'electrical-materials',
    description: 'DEWA/SEWA compliant armored XLPE cables, PVC electrical conduits, distribution boards, MCBs, wiring accessories, and switches.',
    iconName: 'Zap',
    image: catElectricalImg,
    subcategories: [
      'Low Voltage Armored Power Cables (XLPE/SWA/PVC)',
      'Single Core Building Wire (Cu/PVC)',
      'PVC & GI Rigid Electrical Conduits',
      'Distribution Boards (DB), MCB, RCCB, MCCB',
      'Switches, Sockets, Weatherproof Enclosures'
    ]
  },
  {
    id: 'construction-chemicals',
    serialNumber: 9,
    name: 'Construction Chemicals',
    slug: 'construction-chemicals',
    description: 'Certified waterproofing membranes, tile adhesives, epoxy grouts, concrete admixtures, bonding agents, and joint sealants.',
    iconName: 'FlaskConical',
    image: catChemicalsImg,
    subcategories: [
      'Bituminous Waterproofing Torch-On Membranes',
      'Polymer Modified Tile Adhesives (C1/C2)',
      'Waterproof Tile Grouts & Epoxy Mortars',
      'SBR Latex & PVA Concrete Bonding Agents',
      'Polyurethane & Silicone Joint Sealants'
    ]
  },
  {
    id: 'tiles-marble-flooring',
    serialNumber: 10,
    name: 'Tiles, Marble & Flooring',
    slug: 'tiles-marble-flooring',
    description: 'Premium ceramic wall tiles, vitrified porcelain floor tiles, natural marble slabs, granite thresholds, and step treads.',
    iconName: 'Grid',
    image: catTilesImg,
    subcategories: [
      'Full Body Vitrified Porcelain Floor Tiles',
      'Glazed Ceramic Wall & Bathroom Tiles',
      'Natural Marble & Granite Slabs',
      'Outdoor Heavy Duty Anti-Slip Pavers',
      'Tile Trims, Expansion Joints & Spacers'
    ]
  },
  {
    id: 'paints-coatings',
    serialNumber: 11,
    name: 'Paints & Coatings',
    slug: 'paints-coatings',
    description: 'Interior and exterior emulsion paints, protective epoxy floor coatings, enamel gloss paints, anti-fungal primers, and thinners.',
    iconName: 'Paintbrush',
    image: catPaintsImg,
    subcategories: [
      'Interior Matt & Silk Acrylic Emulsions',
      'Exterior Weatherproof Acrylic Texture Paints',
      'Two-Component Epoxy Floor Coatings',
      'Anti-Corrosive Red Oxide & Zinc Phosphate Primers',
      'Putty, Fillers, Wall Primers & Solvents'
    ]
  },
  {
    id: 'gypsum-ceiling-systems',
    serialNumber: 12,
    name: 'Gypsum & Ceiling Systems',
    slug: 'gypsum-ceiling-systems',
    description: 'Regular, moisture and fire-resistant gypsum plasterboards, metal drywall studs, channels, ceiling grid tiles, and joint compounds.',
    iconName: 'LayoutGrid',
    image: catGypsumImg,
    subcategories: [
      'Standard & Moisture Resistant Gypsum Boards (12.5mm)',
      'Fire-Rated Gypsum Wallboards',
      'GI Drywall Studs, Runners & Furring Channels',
      '60x60cm Mineral Fiber Suspended Ceiling Tiles',
      'Joint Compound, Paper Tape & Self-Tapping Drywall Screws'
    ]
  },
  {
    id: 'mesh-building-accessories',
    serialNumber: 13,
    name: 'Mesh & Building Accessories',
    slug: 'mesh-building-accessories',
    description: 'Fiberglass plaster reinforcing mesh, expanded metal GI angle beads, plaster stop beads, tying wire, and polythene damp proof sheets.',
    iconName: 'Maximize2',
    image: catMeshImg,
    subcategories: [
      'Fiberglass Plaster Reinforcing Mesh (145g/160g)',
      'Expanded GI Plaster Angle Beads & Stop Beads',
      'Polythene Damp Proof Membrane (DPM 500-1000 Gauge)',
      'Stainless Steel Wall Ties & Starter Ties',
      'Cavity Closers & Expansion Joint Fillers'
    ]
  },
  {
    id: 'manhole-drainage-products',
    serialNumber: 14,
    name: 'Manhole & Drainage Products',
    slug: 'manhole-drainage-products',
    description: 'Heavy duty ductile iron manhole covers (Class B125, C250, D400), recessed aluminium paving covers, and channel drainage systems.',
    iconName: 'Disc',
    image: catManholeImg,
    subcategories: [
      'Ductile Iron Manhole Covers (B125 / C250 / D400)',
      'Recessed Aluminium & Galvanized Infill Covers',
      'UPVC Road Gully Pots & Catch Basins',
      'Linear Polymer Concrete Drainage Channels & Gratings',
      'Cast Iron Floor Drains & Cleanouts'
    ]
  },
  {
    id: 'machinery-equipment',
    serialNumber: 15,
    name: 'Machinery & Equipment',
    slug: 'machinery-equipment',
    description: 'Contractor machinery including portable concrete mixers, vibrating plate compactors, tamping rammers, and rebar benders/cutters.',
    iconName: 'Cog',
    image: catMachineryImg,
    subcategories: [
      'Diesel & Electric Portable Concrete Mixers (200L - 400L)',
      'Forward Vibrating Plate Compactors',
      'Tamping Rammers (Trench Jumpers)',
      'Rebar Cutting & Bending Machines',
      'High Frequency Concrete Poker Vibrators'
    ]
  },
  {
    id: 'generators-power-equipment',
    serialNumber: 16,
    name: 'Generators & Power Equipment',
    slug: 'generators-power-equipment',
    description: 'Soundproof diesel site generators (10kVA to 250kVA), mobile solar/diesel tower lights, distribution boards, and heavy power cables.',
    iconName: 'Activity',
    image: catGeneratorsImg,
    subcategories: [
      'Silent Heavy-Duty Diesel Generators (15kVA - 250kVA)',
      'Mobile Hydraulic Light Towers',
      'Site Power Distribution Panels & ATS Switches',
      'Temporary Site Transformers (110V/240V/415V)',
      'High-Current Rubber Trailing Power Cables'
    ]
  },
  {
    id: 'safety-products',
    serialNumber: 17,
    name: 'Safety Products',
    slug: 'safety-products',
    description: 'Full range of CE/ANSI certified PPE including safety helmets, steel-toe boots, high-visibility vests, full-body safety harnesses, and gloves.',
    iconName: 'ShieldAlert',
    image: catSafetyImg,
    subcategories: [
      'Industrial Safety Helmets (EN397 / ANSI Z89)',
      'Steel-Toe Cap Construction Safety Shoes & Boots (S1P/S3)',
      'High-Visibility Reflective Safety Vests',
      'Full-Body Fall Arrest Safety Harnesses & Lanyards',
      'Heavy Duty Nitrile & Leather Working Gloves'
    ]
  },
  {
    id: 'tools-hardware',
    serialNumber: 18,
    name: 'Tools & Hardware',
    slug: 'tools-hardware',
    description: 'Industrial power tools (angle grinders, rotary hammers, saws), hand tools, anchor bolts, self-drilling screws, and wire nails.',
    iconName: 'Wrench',
    image: catToolsImg,
    subcategories: [
      'Heavy Duty Rotary Hammer Drills & SDS-Max Breakers',
      'Angle Grinders (4.5", 7", 9") & Diamond Cutting Blades',
      'Masonry Trowels, Spirit Levels, Measuring Tapes',
      'Drop-In Anchors, Wedge Anchors & Chemical Studs',
      'Self-Drilling Metal Screws & Common Wire Nails'
    ]
  },
  {
    id: 'building-general-materials',
    serialNumber: 19,
    name: 'Building & General Materials',
    slug: 'building-general-materials',
    description: 'Site setup consumables including GI temporary hoarding sheets, blue waterproof tarpaulins, contractor wheelbarrows, and site locks.',
    iconName: 'Hammer',
    image: catGeneralImg,
    subcategories: [
      'Galvanized Site Hoarding Corrugated Sheets',
      'Heavy Duty Waterproof Polyethylene Tarpaulins',
      'Contractor Heavy Duty Concrete Wheelbarrows',
      'Chainlink & Barbed Wire Security Fencing',
      'Jute Geotextile Bags, Brooms, Ropes & Site Consumables'
    ]
  }
];

/**
 * MASTER PRODUCT ITEMS
 * Every product has a distinct itemNumber (e.g. 1.1, 1.2), code, and belongs to one of the 19 categories.
 */
export const PRODUCTS: ProductItem[] = [
  // 1. Steel & Reinforcement Products
  {
    id: 'deformed-steel-rebars',
    code: 'ALT-STL-01',
    itemNumber: '1.1',
    name: 'Deformed Steel Rebars (High Yield BS 4449 Grade 500B)',
    categorySlug: 'steel-reinforcement-products',
    categoryName: 'Steel & Reinforcement Products',
    categorySerial: 1,
    description: 'High tensile hot-rolled deformed carbon steel reinforcement bars certified to BS 4449 / ASTM A615 standards for all structural foundations, beams, and columns.',
    applications: [
      'Reinforced concrete foundations, footings and raft slabs',
      'Structural columns, retaining walls and cantilever beams',
      'Multi-story commercial and residential structural framing',
      'Heavy industrial infrastructure and civil engineering works'
    ],
    specifications: {
      'Available Diameters': '8mm, 10mm, 12mm, 14mm, 16mm, 20mm, 25mm, 32mm',
      'Standard Length': '12.0 Meter Commercial Bundles',
      'Steel Grade': 'Grade 500B / 500D (Yield strength ≥ 500 N/mm²)',
      'Standards Compliance': 'BS 4449:2005 / ASTM A615 / ISO 6935-2',
      'Origin': 'UAE / Oman / Qatar / Turkey (Mill Test Certificates provided)'
    },
    image: deformedRebarImg,
    featured: true
  },
  {
    id: 'brc-fabric-wire-mesh',
    code: 'ALT-STL-02',
    itemNumber: '1.2',
    name: 'BRC Fabric Welded Wire Reinforcement Mesh',
    categorySlug: 'steel-reinforcement-products',
    categoryName: 'Steel & Reinforcement Products',
    categorySerial: 1,
    description: 'Prefabricated high-strength cold-drawn steel welded mesh designed for rapid, crack-resistant reinforcement in concrete ground slabs, driveways, and pavements.',
    applications: [
      'Ground-supported concrete slabs and flooring',
      'Driveways, car parks, ramps and industrial hardstanding yards',
      'Precast concrete panels and retaining walls',
      'Screed crack control reinforcement'
    ],
    specifications: {
      'Standard Sheet Size': '2.4m x 4.8m (11.52 sqm per sheet)',
      'Standard Mesh References': 'A142 (6mm @ 200mm), A193 (7mm @ 200mm), A252 (8mm @ 200mm), A393 (10mm @ 200mm)',
      'Wire Yield Strength': '500 N/mm²',
      'Standard': 'BS 4483 / ASTM A185'
    },
    image: brcMeshImg,
    featured: true
  },
  {
    id: 'gi-lintels-binding-wire-nails',
    code: 'ALT-STL-03',
    itemNumber: '1.3',
    name: 'GI Steel Lintels, Annealed Binding Wire & Wire Nails',
    categorySlug: 'steel-reinforcement-products',
    categoryName: 'Steel & Reinforcement Products',
    categorySerial: 1,
    description: 'Pre-galvanized load-bearing steel lintels, soft black annealed tying wire for steel fixing, and heavy-gauge common construction wire nails.',
    applications: [
      'Window and door structural masonry openings',
      'Rebar reinforcement fixing and site tying',
      'Carpentry, formwork framing and wooden shuttering assembly'
    ],
    specifications: {
      'Binding Wire Gauge': 'BWG 18 (1.2mm) & BWG 16 (1.6mm) in 25kg bundles',
      'GI Lintel Profiles': 'Single leaf, standard leaf & heavy duty 1.2m - 3.6m lengths',
      'Common Wire Nails': '2", 2.5", 3", 4" in 20kg / 25kg wooden/carton boxes'
    },
    image: wireNailsImg,
    featured: false
  },

  // 2. Blocks & Masonry Products
  {
    id: 'concrete-hollow-solid-blocks',
    code: 'ALT-BLK-01',
    itemNumber: '2.1',
    name: 'Concrete Hollow & Solid Masonry Blocks',
    categorySlug: 'blocks-masonry-products',
    categoryName: 'Blocks & Masonry Products',
    categorySerial: 2,
    description: 'High compressive strength precast concrete masonry units manufactured in automated batching plants for partition and structural exterior walls.',
    applications: [
      'Internal partition walls and external perimeter masonry',
      'Boundary boundary walls and underground retaining walls',
      'Shaft enclosures and fire separation partitions'
    ],
    specifications: {
      'Sizes Available': '4" (100mm), 6" (150mm), 8" (200mm)',
      'Dimensions': '400mm (L) x 200mm (H) x thickness',
      'Compressive Strength': 'Solid: 7.5 - 12.5 N/mm² | Hollow: 5.0 - 7.5 N/mm²',
      'Standards': 'BS EN 771-3 / ASTM C90 / Dubai & Ajman Municipality Approved'
    },
    image: catBlocksImg,
    featured: true
  },
  {
    id: 'interlocking-paving-blocks',
    code: 'ALT-BLK-02',
    itemNumber: '2.2',
    name: 'Interlocking Concrete Paving Stones & Kerbstones',
    categorySlug: 'blocks-masonry-products',
    categoryName: 'Blocks & Masonry Products',
    categorySerial: 2,
    description: 'Durable, heavy-duty interlocking concrete pavers available in rectangular and Uni-decor shapes with matching road and garden kerbstones.',
    applications: [
      'Commercial villa driveways, walkways and paths',
      'Heavy vehicle loading bays and industrial yards',
      'Roadway margins, parking bays and garden perimeters'
    ],
    specifications: {
      'Thickness': '60mm (Light Traffic), 80mm (Heavy Traffic), 100mm (Industrial)',
      'Colors': 'Grey, Red, Charcoal, Yellow, Terracotta',
      'Kerbstones': 'Half Battered, Bullnose, Heel & Flush Kerb standard sizes',
      'Strength': '≥ 45 N/mm² compressive strength'
    },
    image: interlockBlocksImg,
    featured: false
  },

  // 3. Cement & Concrete Products
  {
    id: 'ordinary-portland-cement-opc-src',
    code: 'ALT-CEM-01',
    itemNumber: '3.1',
    name: 'Ordinary Portland Cement (OPC 42.5N) & SRC Bags',
    categorySlug: 'cement-concrete-products',
    categoryName: 'Cement & Concrete Products',
    categorySerial: 3,
    description: 'Factory-sealed 50kg bags of high-grade Ordinary Portland Cement (OPC) and Sulphate Resisting Portland Cement (SRC) for high strength structural concrete.',
    applications: [
      'Structural beams, columns, suspended slabs and foundations',
      'Underground concrete works exposed to saline/sulphate soils (SRC)',
      'Masonry mortar, external rendering and floor screeds'
    ],
    specifications: {
      'Packaging': '50 kg bags (40 bags per 2-ton pallet)',
      'Cement Types': 'OPC 42.5N, OPC 52.5N, SRC Type V, PLC (Limestone Cement)',
      'Standards': 'BS EN 197-1 / ASTM C150 / UAE GSO Standards',
      'Freshness': 'Freshly bagged with quality test certificates'
    },
    image: portlandCementImg,
    featured: true
  },
  {
    id: 'concrete-rebar-cover-spacers',
    code: 'ALT-CEM-02',
    itemNumber: '3.2',
    name: 'Concrete Cover Spacers & Plastic Rebar Shims',
    categorySlug: 'cement-concrete-products',
    categoryName: 'Cement & Concrete Products',
    categorySerial: 3,
    description: 'High-density fiber-reinforced concrete spacers and plastic rebar wheels to ensure exact nominal concrete cover over steel reinforcement.',
    applications: [
      'Foundation raft rebar positioning and slab bottom reinforcement',
      'Vertical column rebar alignment and wall formwork spacing',
      'Beam bottom and side cover maintenance'
    ],
    specifications: {
      'Concrete Cover Depths': '25mm, 35mm, 40mm, 50mm, 75mm',
      'Types': 'Triple-cover cement blocks with binding wire, plastic clip chairs, circular wheel spacers',
      'Material': 'High-density fiber cement (compressive strength > 50 N/mm²)'
    },
    image: catCementImg,
    featured: false
  },

  // 4. Sand, Aggregates & Road Materials
  {
    id: 'washed-sand-aggregates-subbase',
    code: 'ALT-SND-01',
    itemNumber: '4.1',
    name: 'Washed Black Sand, Dune Sand & Crushed Aggregates',
    categorySlug: 'sand-aggregates-road-materials',
    categoryName: 'Sand, Aggregates & Road Materials',
    categorySerial: 4,
    description: 'Supplied by tipper trailer loads across Ajman and UAE. Low-salt washed plastering sand, white dune backfill, and crushed limestone aggregate fractions.',
    applications: [
      'Masonry mortar and smooth internal/external plaster rendering',
      'Ready-mix concrete manufacturing and on-site concrete mixing',
      'Road base, road sub-base and foundation earth backfilling'
    ],
    specifications: {
      'Sand Varieties': 'Washed Plaster Black Sand, Sweet Washed Sand, Dune Red/White Sand',
      'Aggregate Sizes': '3/8" (10mm), 3/4" (20mm), 1.5" (40mm)',
      'Road Materials': 'Road Base (Class A/B), Sub-base, Wet Mix Granular Base',
      'Delivery Mode': 'By 6-wheel (20 ton), 8-wheel, or 45-cubic-meter tipper trailers'
    },
    image: catSandImg,
    featured: true
  },

  // 5. Plywood & Timber Products
  {
    id: 'film-faced-shuttering-plywood',
    code: 'ALT-TMB-01',
    itemNumber: '5.1',
    name: 'Film Faced Shuttering Plywood (Phenolic 18mm)',
    categorySlug: 'plywood-timber-products',
    categoryName: 'Plywood & Timber Products',
    categorySerial: 5,
    description: 'Premium quality phenolic film-faced waterproof plywood engineered for repeated formwork cycles in fair-faced concrete slabs and columns.',
    applications: [
      'Concrete slab formwork and suspended deck shuttering',
      'Column boxes, beam sides and retaining wall formwork',
      'Precast mould casting and temporary partition panels'
    ],
    specifications: {
      'Standard Dimensions': '1220mm x 2440mm (4ft x 8ft)',
      'Standard Thickness': '18mm (12mm and 15mm available on order)',
      'Film Coating': 'Dark brown 120 g/m² Dynea phenolic resin film both sides',
      'Core & Glue': 'Finger-joint / Full Hardwood Core with WBP (Water Boiled Proof) Phenolic Glue',
      'Reusability': 'Multiple concrete shuttering cycles without delamination'
    },
    image: phenolicPlywoodImg,
    featured: true
  },
  {
    id: 'white-wood-lumber-timber',
    code: 'ALT-TMB-02',
    itemNumber: '5.2',
    name: 'White Wood Lumber & Timber Battens',
    categorySlug: 'plywood-timber-products',
    categoryName: 'Plywood & Timber Products',
    categorySerial: 5,
    description: 'Kiln-dried European spruce and pine white wood timber sawn for construction bracing, formwork framing, site joinery, and packaging.',
    applications: [
      'Formwork backing battens, column boxing supports and wall studs',
      'Site hoarding framework and temporary railings',
      'Carpentry, joinery and protective pallet crating'
    ],
    specifications: {
      'Cross Sections': '2"x2" (45x45mm), 2"x3" (45x70mm), 2"x4" (45x95mm), 3"x3" (70x70mm), 1"x4"',
      'Standard Lengths': '3.0m, 3.6m, 4.0m, 4.2m',
      'Moisture Content': 'Kiln Dried (KD 16-18%)',
      'Origin': 'Romania / Austria / Sweden / Russia'
    },
    image: whiteWoodImg,
    featured: false
  },
  {
    id: 'wooden-scaffold-planks',
    code: 'ALT-TMB-03',
    itemNumber: '5.3',
    name: 'Wooden Scaffolding Planks (OSHA Certified 38x225mm)',
    categorySlug: 'plywood-timber-products',
    categoryName: 'Plywood & Timber Products',
    categorySerial: 5,
    description: 'Heavy duty, visually graded solid timber scaffold walk boards fitted with galvanized end protection bands for safe working platform access.',
    applications: [
      'External and internal facade scaffolding walk platforms',
      'Masonry working staging and perimeter safety decks',
      'Formwork access walkways and gangways'
    ],
    specifications: {
      'Size': '38mm (Thickness) x 225mm (Width) x 3.9m / 4.0m (Length)',
      'End Bands': 'Galvanized steel nail plates or end bands to prevent splitting',
      'Safety Standard': 'BS 2482:2009 / OSHA compliant timber scaffold boards'
    },
    image: scaffoldPlanksImg,
    featured: false
  },

  // 6. Plumbing Materials
  {
    id: 'ppr-hot-cold-pipes-fittings',
    code: 'ALT-PLB-01',
    itemNumber: '6.1',
    name: 'PPR Hot & Cold Pressure Pipes & Brass Insert Fittings',
    categorySlug: 'plumbing-materials',
    categoryName: 'Plumbing Materials',
    categorySerial: 6,
    description: 'High quality Polypropylene Random Copolymer (Type 3) pressure pipes and fusion-welded brass insert fittings for drinking water plumbing.',
    applications: [
      'Hot and cold potable water domestic and commercial networks',
      'Chilled water air-conditioning piping loops',
      'Underfloor radiant heating and solar circuit connections'
    ],
    specifications: {
      'Pressure Ratings': 'PN20 (Cold & Hot Water), PN25 (High Pressure / Solar)',
      'Outer Diameters': '20mm, 25mm, 32mm, 40mm, 50mm, 63mm, 75mm, 110mm',
      'Standard Length': '4.0 Meter rigid lengths',
      'Fitting Range': 'Couplers, Elbows 90°/45°, Equal/Reducing Tees, Male/Female Brass Adapters, Union Valves'
    },
    image: pprPlumbingImg,
    featured: true
  },
  {
    id: 'upvc-drainage-pipes-fittings',
    code: 'ALT-PLB-02',
    itemNumber: '6.2',
    name: 'UPVC Soil, Waste & Drainage Pipes & Fittings',
    categorySlug: 'plumbing-materials',
    categoryName: 'Plumbing Materials',
    categorySerial: 6,
    description: 'Heavy duty unplasticized polyvinyl chloride (UPVC) gravity drainage pipes and fittings manufactured to BS EN 1329 / BS EN 1401 standards.',
    applications: [
      'Above-ground sanitary soil and waste vertical drainage stacks',
      'Underground stormwater and sewer networks',
      'Rainwater downpipes and roof drainage'
    ],
    specifications: {
      'Sizes': '1.25" (32mm), 1.5" (40mm), 2" (50mm), 3" (82mm), 4" (110mm), 6" (160mm)',
      'Standards': 'BS EN 1329 (Above ground) / BS EN 1401 (Underground Class 34/41)',
      'Joint Type': 'Solvent cement socket joint / Rubber ring push-fit'
    },
    image: catPlumbingImg,
    featured: false
  },

  // 7. Water Tanks & Water Systems
  {
    id: 'polyethylene-water-storage-tanks',
    code: 'ALT-WTK-01',
    itemNumber: '7.1',
    name: 'Multi-Layer Polyethylene Water Storage Tanks',
    categorySlug: 'water-tanks-water-systems',
    categoryName: 'Water Tanks & Water Systems',
    categorySerial: 7,
    description: 'Rotomoulded seamless 3-layer and 4-layer UV-stabilized food grade polyethylene water tanks engineered for harsh Middle East weather conditions.',
    applications: [
      'Rooftop domestic potable water storage for villas and buildings',
      'Ground-level emergency fire and irrigation water reservoirs',
      'Construction site temporary water holding systems'
    ],
    specifications: {
      'Capacities': '200 Gallons to 5,000 Gallons (Vertical & Horizontal models)',
      'Layers': 'Anti-Microbial inner food grade layer, Black UV block barrier, Outer heat reflecting layer',
      'Warranty': '10 Year Manufacturer Structural Warranty',
      'Approvals': 'UAE Municipality and Food Safety Compliant'
    },
    image: catWaterImg,
    featured: true
  },
  {
    id: 'solar-water-heaters-booster-pumps',
    code: 'ALT-WTK-02',
    itemNumber: '7.2',
    name: 'Solar Water Heating Systems & Automatic Booster Pumps',
    categorySlug: 'water-tanks-water-systems',
    categoryName: 'Water Tanks & Water Systems',
    categorySerial: 7,
    description: 'Energy-efficient pressurized solar vacuum tube hot water systems paired with reliable automatic pressure booster pumps.',
    applications: [
      'Residential villa and staff accommodation hot water systems',
      'Constant pressure water boosting from rooftop storage',
      'Commercial kitchen and laundry centralized heating'
    ],
    specifications: {
      'Solar Tank Sizes': '150L, 200L, 250L, 300L, 500L',
      'Pump Ratings': '0.5 HP, 0.75 HP, 1.0 HP, 1.5 HP (Cast Iron & Stainless Steel)',
      'Accessories': 'Integrated electric backup immersion heater, pressure safety valve, digital controller'
    },
    image: solarHeaterImg,
    featured: false
  },

  // 8. Electrical Materials
  {
    id: 'armored-power-cables-building-wire',
    code: 'ALT-ELE-01',
    itemNumber: '8.1',
    name: 'Low Voltage Armored XLPE Cables & Single Core Wiring',
    categorySlug: 'electrical-materials',
    categoryName: 'Electrical Materials',
    categorySerial: 8,
    description: 'BASEC / DEWA / SEWA approved low-voltage copper conductor XLPE insulated steel wire armored (SWA) power cables and fire-retardant building wires.',
    applications: [
      'Main underground power feeder lines from substations',
      'Distribution board sub-main electrical supply',
      'Concealed conduit internal lighting and power ring circuits'
    ],
    specifications: {
      'Armored Cable Sizes': '4-Core: 16mm², 25mm², 35mm², 50mm², 70mm², 95mm², 120mm², 185mm², 240mm²',
      'Building Wires': 'Single Core 1.5mm², 2.5mm², 4.0mm², 6.0mm², 10mm² (in 100m Coils)',
      'Insulation': 'PVC / XLPE / LSF (Low Smoke & Fume)',
      'Voltage Grade': '600 / 1000V (Armored), 450 / 750V (Building Wire)'
    },
    image: electricalCablesImg,
    featured: true
  },
  {
    id: 'distribution-boards-conduits-switches',
    code: 'ALT-ELE-02',
    itemNumber: '8.2',
    name: 'Distribution Boards, PVC Conduits & Wiring Accessories',
    categorySlug: 'electrical-materials',
    categoryName: 'Electrical Materials',
    categorySerial: 8,
    description: 'Complete range of sheet steel electrical distribution boards (DB), circuit breakers (MCB, MCCB, ELCB), heavy gauge PVC conduits and switches.',
    applications: [
      'Residential and commercial power control and safety protection',
      'Concealed slab and wall electrical routing pathways',
      'Surface and flush mounted wall switching points'
    ],
    specifications: {
      'Distribution Panels': '4-Way to 24-Way Single Phase (SPN) & Three Phase (TPN)',
      'Conduits': 'Heavy Gauge 20mm, 25mm, 32mm High Impact Rigid PVC + GI Boxes',
      'Switchgear Brands': 'ABB, Schneider Electric, Legrand, Hager compatible'
    },
    image: catElectricalImg,
    featured: false
  },

  // 9. Construction Chemicals
  {
    id: 'waterproofing-membranes-tile-adhesives',
    code: 'ALT-CHM-01',
    itemNumber: '9.1',
    name: 'Waterproofing Membranes, Tile Adhesives & Sealants',
    categorySlug: 'construction-chemicals',
    categoryName: 'Construction Chemicals',
    categorySerial: 9,
    description: 'High-performance bituminous torch-on waterproofing membranes, polymer tile adhesives, waterproof joint grouts, and elastomeric sealants.',
    applications: [
      'Foundation tanking, basement waterproofing and retaining walls',
      'Wet area (bathrooms, kitchens, balconies) waterproofing under tiles',
      'Ceramic and porcelain tile fixing over concrete and plastered walls',
      'Expansion joint weather sealing around windows and facades'
    ],
    specifications: {
      'Membranes': '4mm SBS / APP Modified Bituminous Torch-On with Slate / Sand finish',
      'Tile Adhesives': 'C1 standard & C2TE flexible polymer fortified (20kg / 25kg bags)',
      'Tile Grouts': 'Water repellent CG2 anti-fungal fine grouts & chemical epoxy grouts',
      'Bonding Agents': 'SBR Latex bonding slurries & PVA admixtures'
    },
    image: catChemicalsImg,
    featured: true
  },

  // 10. Tiles, Marble & Flooring
  {
    id: 'porcelain-ceramic-tiles-marble',
    code: 'ALT-FLR-01',
    itemNumber: '10.1',
    name: 'Commercial Porcelain, Ceramic Tiles & Natural Marble Slabs',
    categorySlug: 'tiles-marble-flooring',
    categoryName: 'Tiles, Marble & Flooring',
    categorySerial: 10,
    description: 'Architectural ceramic wall tiles, full-body vitrified porcelain floor tiles, polished natural marble slabs, and granite threshold plates.',
    applications: [
      'Villa and residential interior flooring and bathroom wall cladding',
      'Commercial mall, showroom and office high-traffic floors',
      'Outdoor patio, swimming pool perimeter and terrace paving'
    ],
    specifications: {
      'Tile Sizes': '60x60cm, 60x120cm, 80x80cm, 80x160cm, 30x60cm',
      'Finishes': 'Polished Glazed, Matt R10/R11 Anti-Slip, Honed, Sugar Finish',
      'Marble Slabs': 'Crema Marfil, Carrara White, Dark Emperador, Botticino',
      'Standards': 'ISO 13006 Group BIa compliant (Water absorption < 0.5%)'
    },
    image: catTilesImg,
    featured: true
  },

  // 11. Paints & Coatings
  {
    id: 'interior-exterior-paints-epoxy-coatings',
    code: 'ALT-PNT-01',
    itemNumber: '11.1',
    name: 'Decorative Emulsions, Exterior Texture & Epoxy Floor Paints',
    categorySlug: 'paints-coatings',
    categoryName: 'Paints & Coatings',
    categorySerial: 11,
    description: 'Comprehensive architectural coatings including washable interior emulsions, UV-resistant exterior textures, primers, and two-component epoxy.',
    applications: [
      'Interior living areas, bedrooms, ceilings and gypsum drywall partitions',
      'Exterior building facades requiring weather and carbonation resistance',
      'Factory floors, automotive workshops, warehouses and car park bays'
    ],
    specifications: {
      'Major Brands Handled': 'Jotun Paints, National Paints, Berger Paints, Asian Paints',
      'Finishes': 'Matt, Silk, Semi-Gloss, Heavy Texture Rock Finish, Smooth Epoxy',
      'Packaging': '1 US Gallon, 5 US Gallon (18 Liters / Drum), 20kg Tubs',
      'Accessories': 'Acrylic primers, PVA wall putty, zinc phosphate metal primer'
    },
    image: catPaintsImg,
    featured: true
  },

  // 12. Gypsum & Ceiling Systems
  {
    id: 'gypsum-boards-partition-channels',
    code: 'ALT-GYP-01',
    itemNumber: '12.1',
    name: 'Gypsum Plasterboards, Metal Channels & Acoustic Ceiling Tiles',
    categorySlug: 'gypsum-ceiling-systems',
    categoryName: 'Gypsum & Ceiling Systems',
    categorySerial: 12,
    description: 'Certified 12.5mm and 15mm regular, moisture resistant (MR green), and fire rated (FR pink) gypsum boards with galvanized metal studs and tracks.',
    applications: [
      'Drywall office partitions and interior room dividers',
      'Seamless decorative false ceilings with cove lighting details',
      'Suspended 60x60cm exposed T-grid acoustic ceiling panels'
    ],
    specifications: {
      'Board Dimensions': '1200mm x 2400mm (4ft x 8ft)',
      'Board Thicknesses': '12.5mm (Regular / MR / FR) & 15.0mm',
      'Framing Accessories': 'GI Studs & Runners (50mm, 70mm, 75mm, 100mm), Furring Channels, Main C-Channels, Wall Angles',
      'Ceiling Tiles': '600x600mm Mineral Fiber Acoustic & Vinyl Faced Gypsum Tiles'
    },
    image: gypsumBoardsImg,
    featured: true
  },

  // 13. Mesh & Building Accessories
  {
    id: 'fiberglass-plaster-mesh-gi-beads',
    code: 'ALT-MSH-01',
    itemNumber: '13.1',
    name: 'Fiberglass Plaster Mesh, Expanded Metal GI Beads & DPM',
    categorySlug: 'mesh-building-accessories',
    categoryName: 'Mesh & Building Accessories',
    categorySerial: 13,
    description: 'Plaster reinforcement fiberglass mesh, expanded galvanized angle beads, stop beads, and heavy-gauge polythene damp proof membranes (DPM).',
    applications: [
      'Blockwork and concrete junction crack prevention in plastering',
      'External and internal 90° corner protection and plaster alignment',
      'Under-slab moisture barrier and concrete vapor protection'
    ],
    specifications: {
      'Fiberglass Mesh': '145 g/m² & 160 g/m² alkali-resistant rolls (1m x 50m)',
      'Plaster Beads': 'GI Corner Angle Beads & Plaster Stop Beads (2.4m, 2.7m, 3.0m)',
      'DPM Polythene Rolls': '500 Gauge, 800 Gauge, 1000 Gauge, 1200 Gauge (4m x 25m)'
    },
    image: catMeshImg,
    featured: false
  },

  // 14. Manhole & Drainage Products
  {
    id: 'ductile-iron-recessed-manhole-covers',
    code: 'ALT-DRN-01',
    itemNumber: '14.1',
    name: 'Ductile Iron Manhole Covers, Recessed Trays & Gully Grates',
    categorySlug: 'manhole-drainage-products',
    categoryName: 'Manhole & Drainage Products',
    categorySerial: 14,
    description: 'EN 124 certified heavy duty ductile iron manhole covers and frames, double sealed aluminium recessed infill covers, and stormwater catch gratings.',
    applications: [
      'Internal villa tiled courtyards requiring concealed cover finishes',
      'Municipal roadways, parking complexes and service road chambers',
      'Commercial perimeter drainage catch pits and gully traps'
    ],
    specifications: {
      'Load Ratings': 'Class A15 (Pedestrian), B125 (Car Parks), C250 (Curbside), D400 (Heavy Highways)',
      'Clear Opening Sizes': '300x300mm, 450x450mm, 600x600mm, 600x900mm, 900x900mm',
      'Material': 'Ductile Iron GGG50 / Extruded Aluminium Alloy 6063-T6 / Galvanized Steel'
    },
    image: catManholeImg,
    featured: true
  },

  // 15. Machinery & Equipment
  {
    id: 'construction-mixers-compactors-vibrators',
    code: 'ALT-MCH-01',
    itemNumber: '15.1',
    name: 'Portable Concrete Mixers, Plate Compactors & Concrete Vibrators',
    categorySlug: 'machinery-equipment',
    categoryName: 'Machinery & Equipment',
    categorySerial: 15,
    description: 'Jobsite workhorse machinery powered by Honda/Robin petrol and heavy diesel engines for on-site concrete preparation and soil compaction.',
    applications: [
      'Small to medium concrete mixing on villa and warehouse sites',
      'Sub-base, interlocking paver bed and asphalt repair compaction',
      'In-situ structural concrete air pocket elimination and compaction'
    ],
    specifications: {
      'Concrete Mixers': '1-Bag (200L) to 2-Bag (350L) Diesel & Electric Drum Mixers',
      'Plate Compactors': 'Forward / Reversible Plate Compactors (90kg - 180kg)',
      'Poker Vibrators': 'Petrol & Electric Drive Units with 28mm, 38mm, 45mm needles'
    },
    image: catMachineryImg,
    featured: false
  },

  // 16. Generators & Power Equipment
  {
    id: 'silent-diesel-generators-light-towers',
    code: 'ALT-GEN-01',
    itemNumber: '16.1',
    name: 'Silent Heavy Duty Diesel Generators & Mobile Light Towers',
    categorySlug: 'generators-power-equipment',
    categoryName: 'Generators & Power Equipment',
    categorySerial: 16,
    description: 'Sound-attenuated weatherproof diesel generator sets (Perkins / Cummins / Yanmar engines) designed for continuous site power in high ambient heat.',
    applications: [
      'Primary power for construction job sites before grid connection',
      'Emergency standby automatic backup power for commercial premises',
      'Night-time construction shifts, highway maintenance and events'
    ],
    specifications: {
      'Power Output Ranges': '15 kVA, 30 kVA, 60 kVA, 100 kVA, 150 kVA, 250 kVA',
      'Features': 'Super silent acoustic canopy (<72 dB @ 7m), large fuel tank, digital control panel',
      'Light Towers': '4x1000W Metal Halide or 4x350W High-Lumen LED Lamps with telescopic mast'
    },
    image: catGeneratorsImg,
    featured: false
  },

  // 17. Safety Products
  {
    id: 'industrial-ppe-safety-equipment',
    code: 'ALT-SFT-01',
    itemNumber: '17.1',
    name: 'Personal Protective Equipment (PPE) & Construction Safety Gear',
    categorySlug: 'safety-products',
    categoryName: 'Safety Products',
    categorySerial: 17,
    description: 'Complete personal safety equipment complying with UAE Ministry of Human Resources & Emiratisation and international safety standards.',
    applications: [
      'Mandatory daily site worker head, foot, eye and hand protection',
      'High-altitude scaffolding, mast climber and roof perimeter work',
      'Traffic marshalling, night shift visibility and hazardous dust safety'
    ],
    specifications: {
      'Head & Face': 'EN397 Industrial Hard Hats (White, Yellow, Blue, Green), Safety Glasses, Face Shields',
      'Footwear': 'S1P / S3 Steel Toe Cap & Steel Midsole Nubuck Leather Safety Shoes (Sizes 38-47)',
      'Body & Fall': 'EN361 Full-Body Safety Harness with Shock Absorbing Lanyard, High-Vis Class 2 Vests',
      'Hand Protection': 'Heavy Split Leather Riggers, Nitrile Coated, Cut-Level 5 Work Gloves'
    },
    image: catSafetyImg,
    featured: true
  },

  // 18. Tools & Hardware
  {
    id: 'heavy-duty-power-hand-tools',
    code: 'ALT-TLS-01',
    itemNumber: '18.1',
    name: 'Professional Rotary Hammers, Cutters & Hardware Fasteners',
    categorySlug: 'tools-hardware',
    categoryName: 'Tools & Hardware',
    categorySerial: 18,
    description: 'Heavy duty corded and cordless demolition hammers, 9-inch angle grinders, hand tools, anchor bolts, chemical anchors, and construction fasteners.',
    applications: [
      'Concrete drilling, anchoring, core cutting and demolition chipping',
      'Rebar and structural steel profile cutting and weld preparation',
      'General MEP mechanical fixing, duct hanging and framing fasteners'
    ],
    specifications: {
      'Power Tools': 'SDS-Plus & SDS-Max Rotary Hammer Drills, 115mm/230mm Angle Grinders, Cut-off Saws',
      'Anchors': 'Heavy Duty Wedge Anchors, Drop-In Anchors, Threaded Rods (M6 to M24), Epoxy Injection Studs',
      'Hand Tools': 'Heavy Sledgehammers, Shovels, Picks, Trowels, Spirit Levels, Measuring Tapes'
    },
    image: catToolsImg,
    featured: false
  },

  // 19. Building & General Materials
  {
    id: 'site-hoarding-tarpaulins-wheelbarrows',
    code: 'ALT-GEN-02',
    itemNumber: '19.1',
    name: 'GI Hoarding Sheets, Blue Tarpaulins & Heavy Duty Wheelbarrows',
    categorySlug: 'building-general-materials',
    categoryName: 'Building & General Materials',
    categorySerial: 19,
    description: 'Essential site mobilization supplies including corrugated galvanized boundary hoarding sheets, waterproof tarpaulins, wheelbarrows, and site locks.',
    applications: [
      'Site perimeter hoarding and municipality compliant project fencing',
      'Weather protection covering for cement pallets, rebar and timber',
      'On-site concrete, mortar, block and aggregate manual transportation'
    ],
    specifications: {
      'Hoarding Sheets': '0.35mm to 0.7mm Continuous GI Corrugated / Box Profile sheets (2.0m & 2.4m height)',
      'Tarpaulins': 'Heavy Duty 120 - 200 GSM Waterproof Woven Polyethylene Tarpaulins with eyelets',
      'Wheelbarrows': 'Seamless pressed steel tray (90L / 120L capacity) with pneumatic puncture-proof wheels'
    },
    image: catGeneralImg,
    featured: true
  }
];

/**
 * TOTAL CONSTANTS & UTILITIES
 * Guaranteed single source of truth across the whole application.
 */
export const TOTAL_CATEGORY_COUNT = PRODUCT_CATEGORIES.length; // Exactly 19
export const TOTAL_PRODUCT_COUNT = PRODUCTS.length;

/**
 * Format category serial with leading zero: e.g. 1 -> "01", 19 -> "19"
 */
export const formatCategorySerial = (serialNumber: number): string => {
  return serialNumber < 10 ? `0${serialNumber}` : `${serialNumber}`;
};

/**
 * Get category by slug or id
 */
export const getCategoryBySlug = (slug: string): ProductCategory | undefined => {
  return PRODUCT_CATEGORIES.find(c => c.slug === slug || c.id === slug);
};

/**
 * Get category 1-based serial number (1 to 19)
 */
export const getCategoryIndex = (slug: string): number => {
  const cat = PRODUCT_CATEGORIES.find(c => c.slug === slug || c.id === slug);
  return cat ? cat.serialNumber : 1;
};

/**
 * Get all product items belonging to a specific category
 */
export const getCategoryProducts = (categorySlug: string): ProductItem[] => {
  return PRODUCTS.filter(p => p.categorySlug === categorySlug);
};

/**
 * Get dynamic product count for a category
 */
export const getCategoryProductCount = (categorySlug: string): number => {
  return getCategoryProducts(categorySlug).length;
};

/**
 * Format category title with leading zero serial: e.g. "01. Steel & Reinforcement Products"
 */
export const formatCategoryTitle = (category: ProductCategory): string => {
  return `${formatCategorySerial(category.serialNumber)}. ${category.name}`;
};

/**
 * Format product title with item number: e.g. "Item 1.1 - Deformed Steel Rebars"
 */
export const formatProductTitle = (product: ProductItem): string => {
  return `Item ${product.itemNumber}: ${product.name}`;
};

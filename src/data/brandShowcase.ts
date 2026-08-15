export type ShowcaseBrand = {
  id: string;
  name: string;
  category: string;
  mark: string;
  /**
   * Add a real logo path later, for example:
   * logo: "/assets/brands/2-concepts.svg"
   * When logo is omitted, the styled text mark is shown.
   */
  logo?: string;
};

// Temporary portfolio marks for the moving strips.
// Replace `mark` with real `logo` paths when the approved assets arrive.
export const showcaseBrands: ShowcaseBrand[] = [
 
  {
    id: "modubuild",
    name: "ModuBuild",
    category: "Construction & Interiors",
    mark: "MB",
  },
  {
  id: "la-rotunda",
  name: "La Rotunda",
  category: "Dining Experience",
  mark: "LR",
},
  {
    id: "cairo-medical",
    name: "Cairo Medical",
    category: "Healthcare Experience",
    mark: "CM",
  },
  {
  id: "set-el-sham",
  name: "Set El Sham",
  category: "Syrian Restaurant Experience",
  mark: "SS",
},
{
  id: "qahwa-x",
  name: "Qahwa X",
  category: "Coffee Shop & Café Experience",
  mark: "QX",
},
  {
    id: "masar",
    name: "MASAR",
    category: "Legal Technology",
    mark: "M",
  },
  {
    id: "ica",
    name: "IO Code Academy",
    category: "Education Platform",
    mark: "ICA",
  },
  {
    id: "jaguar-gym",
    name: "Jaguar GYM",
    category: "Fitness Management",
    mark: "JG",
  },
{
  id: "dragon-code",
  name: "Dragon Code",
  category: "Technology Education",
  mark: "DC",
},
{
  id: "a-plus-aura",
  name: "A Plus Aura",
  category: "Education & Training",
  mark: "A+",
},
{
  id: "qasr-el-salaam",
  name: "Qasr El Salaam",
  category: "Restaurant Experience",
  mark: "QS",
},
{
  id: "sabry-afandi",
  name: "Sabry Afandi",
  category: "Egyptian Restaurant",
  mark: "SA",
},
{
  id: "orchids",
  name: "Orchid's",
  category: "Premium Brand Experience",
  mark: "OR",
},
{
  id: "nadeem-academy",
  name: "Nadeem Academy",
  category: "Education Platform",
  mark: "NA",
},
{
  id: "taiba",
  name: "Taiba Syrian Restaurant",
  category: "Syrian Restaurant",
  mark: "TA",
},
{
  id: "bunz",
  name: "BUNZ Smash Burger",
  category: "Smash Burger Restaurant",
  mark: "BZ",
},
{
  id: "two-concepts",
  name: "2 Concepts",
  category: "Architecture & Engineering",
  mark: "2C",
},
 {
    id: "ali-baba",
    name: "Ali Baba",
category: "Oriental Sweets & Desserts",
    mark: "AB",
  },

{
  id: "caterserv",
  name: "CaterServ",
  category: "Catering Services",
  mark: "CS",
},

];

export const navigation = [
  { label: "Home", path: "/" },
  {
    label: "Solutions",
    children: [
      {
        label: "Projectadministratie",
        path: "/solutions/project-administration",
        description: "Digitale ontvangst en beheer van aanvragen",
      },
      {
        label: "Financiële Administratie",
        path: "/solutions/financial-administration",
        description: "Geïntegreerde financiële verwerking en rapportage",
      },
      {
        label: "Relatiebeheer",
        path: "/solutions/relationship-management",
        description: "Centraal beheer van al uw relaties",
      },
      {
        label: "Vergadermodule",
        path: "/solutions/meeting-module",
        description: "Digitaal vergaderen voor bestuurders",
      },
      {
        label: "Documentkluis",
        path: "/solutions/document-vault",
        description: "Veilige centrale opslag van documenten",
      },
    ],
  },
  { label: "Onze Klanten", path: "/clients" },
  { label: "Over Ons", path: "/about" },
  { label: "Contact", path: "/contact" },
];

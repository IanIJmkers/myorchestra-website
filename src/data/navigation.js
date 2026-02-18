export const navigation = [
  { label: "Home", path: "/" },
  {
    label: "Oplossingen",
    children: [
      {
        label: "Projectadministratie",
        path: "/Oplossingen/project-administration",
        description: "Digitale ontvangst en beheer van aanvragen",
      },
      {
        label: "Financiële Administratie",
        path: "/Oplossingen/financial-administration",
        description: "Geïntegreerde financiële verwerking en rapportage",
      },
      {
        label: "Relatiebeheer",
        path: "/Oplossingen/relationship-management",
        description: "Centraal beheer van al uw relaties",
      },
      {
        label: "Vergadermodule",
        path: "/Oplossingen/meeting-module",
        description: "Digitaal vergaderen voor bestuurders",
      },
      {
        label: "Documentkluis",
        path: "/Oplossingen/document-vault",
        description: "Veilige centrale opslag van documenten",
      },
    ],
  },
  { label: "Onze Klanten", path: "/clients" },
  { label: "Over Ons", path: "/about" },
  { label: "Contact", path: "/contact" },
];

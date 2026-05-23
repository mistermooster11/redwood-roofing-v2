export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Residential Roofing",  href: "/residential-roofing/" },
  { label: "Commercial Roofing",   href: "/commercial-roofing/" },
  { label: "Roof Repair",          href: "/roof-repair/" },
  { label: "Roof Replacement",     href: "/roof-replacement/" },
  { label: "Roof Inspection",      href: "/roof-inspection/" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Residential Roofing",
    image: "/images/roofing-crew-working-residential-roof-installation.jpg",
    href: "/residential-roofing/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Roof Repair & Leak Fix",
    image: "/images/roofer-inspecting-asphalt-shingles-closeup.jpg",
    href: "/roof-repair/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Full Roof Replacement",
    image: "/images/roofing-crew-installing-shingles-aerial-view.jpg",
    href: "/roof-replacement/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Storm Damage & Emergency",
    image: "/images/roofing-crew-aerial-safety-harness-installation.jpg",
    href: "/roof-repair/",
    width: 535,
    height: 643,
  },
];

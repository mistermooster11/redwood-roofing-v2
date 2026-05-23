export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: "Sandra M.",
    rating: 5,
    text: "Redwood Roofing Pro came out the same day after we noticed a leak following a big storm. They found the problem immediately, gave us a fair written estimate, and had it fixed by end of day. Clean, professional, and no surprises.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocL3k03UBzFH_Zk8QtA58Bf_Q9rXblV8IFtiB0pgn0AcLb4UIQ=w40-h40-c-rp-mo-ba2-br100",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Got three quotes for a full roof replacement. Redwood Roofing Pro was the most thorough — they actually walked the roof and showed me photos of every issue. The work was done in two days and the crew left the yard spotless.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIE32xZATtOnEXpmCOro23-w3fhcTl5jaglUqbSvDlClUO8r0Q=w40-h40-c-rp-mo-br100",
  },
  {
    name: "Karen L.",
    rating: 5,
    text: "After the last big storm, I had three roofers look at my roof. These guys were the only ones who gave me a written, itemized estimate. Work was done in one day. Highly recommend.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLlrTmtvZJdMeBQh3lCwWleFLUX_XZGg6eFNJYXu1MGTKk0W5RQ=w40-h40-c-rp-mo-ba3-br100",
  },
  {
    name: "Tom H.",
    rating: 5,
    text: "We've been using Redwood Roofing Pro for our rental properties for years. They always show up when they say they will, the pricing is fair, and the work holds up. Trustworthy company.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUWhl7IvbC_Kz1JOg8ozty0n7gCipF-XZlDYG79ELbNqLGA7CKp=w40-h40-c-rp-mo-br100",
  },
  {
    name: "Maria G.",
    rating: 5,
    text: "Called them about a persistent leak nobody else could find. They traced it to a flashing issue under the chimney and fixed it the same visit. Finally dry after two years of patching.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIqOf2uasEJNFslk2cUDpYuR26HBN8O0xUap_mpj4t9rQSy_A=w40-h40-c-rp-mo-br100",
  },
  {
    name: "James W.",
    rating: 5,
    text: "Fast response, honest pricing, quality work. They replaced my gutters and repaired storm damage on the same visit. Couldn't ask for more.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVCE4L-kkK5JAi1ttiaAvHu5dHf5Wll09C4RhSgcy-L-3EuxcPO=w40-h40-c-rp-mo-br100",
  },
];

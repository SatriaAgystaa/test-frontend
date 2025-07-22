export interface Genre {
  id: string
  title: string
  iconPath: string // path ke file icon (SVG/PNG/JPG)
}

export const genres: Genre[] = [
  {
    id: "edm",
    title: "EDM",
    iconPath: "/assets/icons/Genre/edm.svg"
  },
  {
    id: "hiphop",
    title: "HIP-HOP",
    iconPath: "/assets/icons/Genre/hiphop.svg"
  },
  {
    id: "rnb",
    title: "R&B",
    iconPath: "/assets/icons/Genre/r&b.svg"
  },
  {
    id: "pop",
    title: "POP",
    iconPath: "/assets/icons/Genre/pop.svg"
  }
]

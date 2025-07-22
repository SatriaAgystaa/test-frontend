export interface Feature {
  id: string
  title: string
  iconPath: string
  effectPath?: string // Optional path for the background effect image
}

export const features: Feature[] = [
  {
    id: "high-quality-audio",
    title: "HIGH-QUALITY AUDIO FILES (WAV\n+ MP3)",
    iconPath: "/assets/icons/Features/audio.svg", // Placeholder for audio icon
    effectPath: "/assets/icons/Features/wavy_lines.svg", // Placeholder for wavy effect
  },
  {
    id: "license-certificate",
    title: "LICENSE\nCERTIFICATE\n(PDF)",
    iconPath: "/assets/icons/Features/hexa.svg", // Placeholder for license icon
    effectPath: "/assets/icons/Features/wavy_lines.svg", // Placeholder for wavy effect
  },
  {
    id: "download-access",
    title: "DOWNLOAD\nACCESS",
    iconPath: "/assets/icons/Features/docs.svg", // Placeholder for download icon
    effectPath: "/assets/icons/Features/wavy_lines.svg", // Placeholder for wavy effect
  },
]

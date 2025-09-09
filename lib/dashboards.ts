export type DashboardMeta = { slug: string; title: string; desc?: string }

export const dashboards: DashboardMeta[] = [
  { slug: 'stitchos', title: 'StitchOS — The Connected Loom', desc: 'Operational telemetry + control' },
  { slug: 'textiletrack', title: 'TextileTrack', desc: 'Real-time RFID tracking' },
  { slug: 'quickbill', title: 'QuickBill', desc: 'Billing KPIs' },
]


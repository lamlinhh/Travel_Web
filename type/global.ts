declare global {
  type $Device = keyof typeof $Device;
}

export enum $Device {
  Mobile = "Mobile",
  Tablet = "Tablet",
  Desktop = "Desktop",
}

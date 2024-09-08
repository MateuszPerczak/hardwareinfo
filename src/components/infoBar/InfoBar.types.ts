export type InfoBarProps = {
  title: string;
  description?: string;
  type: InfoBarType;
};

export type InfoBarType = "info" | "error" | "waring";

export type ButtonProps = {
  children?: React.ReactNode;
  className: string;
  onClick?: () => void;
};

export type InputProps = {
  className: string;
  content: string | React.ReactNode;
  placeholder: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// Useful to extract props from styled components
export type ExtractProps<TComponentOrTProps> =
  TComponentOrTProps extends React.ComponentType<infer TProps>
    ? TProps
    : TComponentOrTProps;

export type IObject<T = any> = Record<string, T>;

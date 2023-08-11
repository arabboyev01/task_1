export type HandleSubmitFunction = (values: FormData) => void;

export interface ChildComponentProps {
  handleSubmit: HandleSubmitFunction;
  styles: any
}
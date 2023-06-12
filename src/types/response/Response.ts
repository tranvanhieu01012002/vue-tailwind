import { ResponseStatus } from "@/enums";

interface ResponseData {
  status: ResponseStatus;
  message: string;
  data: unknown;
}
export { ResponseData };

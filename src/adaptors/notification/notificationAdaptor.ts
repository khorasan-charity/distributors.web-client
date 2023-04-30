import { NotificationService } from "../../application/ports";
import { toast } from "react-toastify";

export function useNotification(): NotificationService {
  return {
    success: msg => {
      toast.success(msg);
    },
    error: msg => {
      toast.error(msg);
    },
  };
}

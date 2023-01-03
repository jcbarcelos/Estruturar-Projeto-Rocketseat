import { routes } from "../routes";
import { AuthenticateClientController } from "../../modules/account/authenticateUser/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "../../modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
const authenticateRouter = routes;
const authenticateClienController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
authenticateRouter.post(
  "/authenticate/client",
  authenticateClienController.handle
);
authenticateRouter.post(
  "/authenticate/deliveryman",
  authenticateDeliverymanController.handle
);
export { authenticateRouter };

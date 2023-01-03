import { routes } from "../routes";
import { CreateDeliverymanController } from "../../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { AuthenticateDeliverymanController } from "../../modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { FindAllDeliveriesDeliveriesController } from "../../modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";
import { ensureAuthenticateDeliveryman } from "../../middlewares/ensureAuthenticateDeliveryman";
import { UpdateEndDateController } from "../../modules/deliveries/useCases/updateEndDate/UpdateEndDateController";
const deleiverymanRouter = routes;
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const findAllDeliveriesDeliveriesController =
  new FindAllDeliveriesDeliveriesController();
const updateEndDateController = new UpdateEndDateController();
deleiverymanRouter.post(
  "/deliveryman/create",
  ensureAuthenticateDeliveryman,
  createDeliverymanController.handle
);
deleiverymanRouter.post(
  "/deliveryman/authenticate",
  ensureAuthenticateDeliveryman,
  authenticateDeliverymanController.handle
);
deleiverymanRouter.get(
  "/deliveryman/deliveries",
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliveriesController.handle
);
routes.put(
  "/deliveryman/updateEndDate/:id",
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle
);
export { deleiverymanRouter };

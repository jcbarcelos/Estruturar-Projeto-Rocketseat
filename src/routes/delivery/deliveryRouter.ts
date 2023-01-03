import { routes } from "../routes";
import { CreateDeliveryController } from "../../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "../../middlewares/ensureAuthenticateClient";

import { ensureAuthenticateDeliveryman } from "../../middlewares/ensureAuthenticateDeliveryman";
import { UpdateDeliverymanController } from "../../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { FindAllDeliveriesController } from "../../modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { FindAllAvalalableController } from "../../modules/deliveries/useCases/findAllAvailable/findAllAvalalableController";

const deliveryRouter = routes;
const findAllAvalalableController = new FindAllAvalalableController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const createDeliveryController = new CreateDeliveryController();
const updateDeliverymanController = new UpdateDeliverymanController();


routes.post(
  "/delivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);
routes.get(
  "/delivery/available",
  ensureAuthenticateDeliveryman,
  findAllAvalalableController.handle
);
routes.put(
  "/delivery/updateDevliverman/:id",
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);
routes.put(
  "/delivery/client/:id",
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);

export { deliveryRouter };

import { routes } from "../routes";
import { CreateClienController } from "../../modules/clients/useCases/createClient/CreateClientController";
const clientRouter = routes;
const createClienController = new CreateClienController();
clientRouter.post("/client", createClienController.handle);
export { clientRouter };

import { routes } from "../routes";
import { CreateClienController } from "../../modules/clients/useCases/createClient/CreateClientController";
const clientRouter = routes;
const createClienController = new CreateClienController();
routes.post("/client", createClienController.handle);
export { clientRouter };

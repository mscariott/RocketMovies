const {Router} = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const UsersController = require("../controllers/usersController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const UserAvatarController = require("../controllers/userAvatarControler")

const usersRoutes = Router()
const usersController = new UsersController()
const userAvatarControler = new UserAvatarController()

const upload = multer(uploadConfig.MULTER)

usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.post("/", usersController.create)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarControler.update)


module.exports = usersRoutes


const express = require("express");
const router = express.Router();
const { Module } = require("module");

//Request check
router.use((req, res, next) => {
	console.log("Request made to MODULES Route");
	next();
})

// GET /all lists of modules
router.get("/", async (req, res, next) => {
  try {
    const modules = await Module.findAll();
    res.send(modules);
  } catch (error) {
    next(error);
  }
});

// GET / select and GET spesific module by id
router.get("/:id", async (req, res, next) => {
  try {
    const selectedModule = await Module.findByPk(req.params.id);
    res.send(selectedModule);
  } catch (error) {
    next(error);
  }
});

// GET modules by moduleName category
router.get("/moduleName/:moduleName", async (req, res, next) => {
  try {
    const listModuleByModule = await Lecture.findAll({where: {moduleName: req.params.type}});
    res.send(listModuleByModule);
  } catch (error) {
    next(error);
  }
});

//POST /create list of modules 
router.post("/", async (req, res, next) => {
  try {
    const [module, createdModules] = await Module.findOrCreate({
      where: {
        moduleName: req.body.moduleName,
        moduleUrl: req.body.moduleUrl,
        excersices: req.body.excersices,
				description: req.body.description
      }
    });
    res.send(module);
  } catch (error) {
    next(error);
  }
});

// PUT / Update module list by id 
router.put("/:id", async (req, res, next) => {
  try {
    const updatedModule = await Module.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedModule);
  } catch (error) {
    next(error);
  }
});

// DELETE / from modules list by id 
router.delete("/:id", async (req, res, next) => {
  try {
    await Module.destroy({
      where: {
        id: req.params.id
      }
    });
    const modules = await Module.findAll();
    res.send(modules);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
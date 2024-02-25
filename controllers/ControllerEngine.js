const handleError = (res, error) => {
  console.error(error);
  res.status(500).json({ error: 'Internal server error' });
};

const createController = (Model, requiredFields, customValidations = {}) => {
  return {
    getAll: async (req, res) => {
      try {
        const data = await Model.find();
        res.json(data);
      } catch (error) {
        handleError(res, error);
      }
    },

    create: async (req, res) => {
      const requestBody = req.body;
      const missingFields = requiredFields.filter(field => !requestBody[field]);

      if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
      }

      // Custom validation function (if provided)
      if (typeof customValidations.create === 'function') {
        const customValidationResult = customValidations.create(requestBody);
        if (customValidationResult.error) {
          return res.status(400).json({ error: customValidationResult.error });
        }
      }

      try {
        const newEntity = await Model.create(requestBody);
        res.status(201).json(newEntity);
      } catch (error) {
        handleError(res, error);
      }
    },

    getById: async (req, res) => {
      const entityId = req.params.id;
      try {
        const entity = await Model.findById(entityId);
        if (!entity) {
          return res.status(404).json({ error: 'Entity not found' });
        }
        res.json(entity);
      } catch (error) {
        handleError(res, error);
      }
    },

    update: async (req, res) => {
      const entityId = req.params.id;
      const requestBody = req.body;
      const missingFields = requiredFields.filter(field => !requestBody[field]);

      if (missingFields.length > 0) {
        return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
      }

      // Custom validation function (if provided)
      if (typeof customValidations.update === 'function') {
        const customValidationResult = customValidations.update(requestBody);
        if (customValidationResult.error) {
          return res.status(400).json({ error: customValidationResult.error });
        }
      }

      try {
        const updatedEntity = await Model.findByIdAndUpdate(
          entityId,
          requestBody,
          { new: true }
        );
        if (!updatedEntity) {
          return res.status(404).json({ error: 'Entity not found' });
        }
        res.json(updatedEntity);
      } catch (error) {
        handleError(res, error);
      }
    },

    remove: async (req, res) => {
      const entityId = req.params.id;
      try {
        const deletedEntity = await Model.findByIdAndRemove(entityId);
        if (!deletedEntity) {
          return res.status(404).json({ error: 'Entity not found' });
        }
        res.json(deletedEntity);
      } catch (error) {
        handleError(res, error);
      }
    },
  };
};

module.exports = createController;

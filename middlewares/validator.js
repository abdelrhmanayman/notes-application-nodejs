module.exports = ({ bodySchema, paramsSchema, querySchema }) => (req, res, next) => {
  try {

    if (!bodySchema && !paramsSchema && !querySchema) {
      throw new Error('Validation Error');
    }

    if (bodySchema) {
      const { error, value } = bodySchema.validate(req.body);
      if (error) throw error;
      req.body = value;
    }

    if (paramsSchema) {
      const { error, value } = paramsSchema.validate(req.params);
      if (error) throw error;
      req.params = value;
    }

    if (querySchema) {
      const { error, value } = querySchema.validate(req.query);
      if (error) throw error;
      req.query = value;
    }

    next();

  } catch (error) {
    next({ message: error.message, code: 400 });
  }
};
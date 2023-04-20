import Teacher from '../models/Teacher';

class TeacherController {
  async index(req, res) {
    const teachers = await Teacher.findAll({
      attributes: ['id', 'name', 'email', 'phone_number', 'status'],
      order: [
        ['id', 'DESC'],
      ],
    });
    res.json(teachers);
  }

  async store(req, res) {
    try {
      const teacher = await Teacher.create(req.body);

      return res.json(teacher);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando Id!'],
        });
      }

      const teacher = await Teacher.findByPk(id, {
        attributes: ['id', 'name', 'email', 'phone_number', 'status'],
        order: [
          ['id', 'DESC'],
        ],
      });

      if (!teacher) {
        return res.status(400).json({
          errors: ['Teacher não existe!'],
        });
      }

      return res.json(teacher);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando Id!'],
        });
      }

      const teacher = await Teacher.findByPk(id);

      if (!teacher) {
        return res.status(400).json({
          errors: ['Teacher não existe!'],
        });
      }

      await teacher.destroy();

      return res.json({ apagado: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando Id!'],
        });
      }

      const teacher = await Teacher.findByPk(id);

      if (!teacher) {
        return res.status(400).json({
          errors: ['Teacher não existe!'],
        });
      }

      const teacherAtualizado = await teacher.update(req.body);
      return res.json(teacherAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new TeacherController();

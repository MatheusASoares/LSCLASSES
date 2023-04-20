import Student from '../models/Student';
import Teacher from '../models/Teacher';

class AlunoController {
  async index(req, res) {
    const students = await Student.findAll({
      attributes: [
        'id',
        'name',
        'teacher_id',
        'phone_number',
        'cpf',
        'level',
        'status',
      ],
      order: [['id', 'DESC']],
      include: {
        model: Teacher,
        attributes: ['id', 'name', 'email', 'phone_number', 'status'],
        paranoid: false,
      },
    });
    res.json(students);
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);

      return res.json(student);
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

      const student = await Student.findByPk(id, {
        attributes: [
          'id',
          'name',
          'teacher_id',
          'phone_number',
          'cpf',
          'level',
          'status',
        ],
        order: [['id', 'DESC']],
        include: {
          model: Teacher,
          attributes: ['id', 'name', 'email', 'phone_number', 'status'],
          paranoid: false,
        },
      });

      if (!student) {
        return res.status(400).json({
          errors: ['Student não existe!'],
        });
      }

      return res.json(student);
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

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student não existe!'],
        });
      }

      await student.destroy();

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

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student não existe!'],
        });
      }

      const alunoAtualizado = await student.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();

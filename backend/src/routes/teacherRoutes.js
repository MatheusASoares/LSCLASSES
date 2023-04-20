import { Router } from 'express';
import teacherController from '../controllers/TeacherController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', teacherController.index);
router.post('/', teacherController.store);
router.put('/:id', teacherController.update);
router.get('/:id', teacherController.show);
router.delete('/:id', teacherController.delete);

export default router;

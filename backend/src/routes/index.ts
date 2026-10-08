import { Router } from 'express';
import { getCountries, getCountryByIdOrCode, getUniversities, getCourses } from '../controllers/catalogController';
import { register, login, logout, me } from '../controllers/authController';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

// Concept API routes
router.post('/auth/register', register);
router.post('/auth/login', login);
router.post('/auth/logout', logout);
router.get('/auth/me', requireAuth, me);
router.use('/users', (req, res) => { res.json({ msg: 'User routes pending' }) });
router.use('/students', (req, res) => { res.json({ msg: 'Student routes pending' }) });
router.get('/countries', getCountries);
router.get('/countries/:identifier', getCountryByIdOrCode);
router.get('/universities', getUniversities);
router.get('/courses', getCourses);
router.use('/events', (req, res) => { res.json({ msg: 'Events routes pending' }) });
router.use('/event-registrations', (req, res) => { res.json({ msg: 'Event registrations routes pending' }) });
router.use('/counselors', (req, res) => { res.json({ msg: 'Counselors routes pending' }) });
router.use('/appointments', (req, res) => { res.json({ msg: 'Appointments routes pending' }) });
router.use('/leads', (req, res) => { res.json({ msg: 'Leads routes pending' }) });
router.use('/eligibility', (req, res) => { res.json({ msg: 'Eligibility routes pending - Awaiting Client Rules' }) });

export default router;

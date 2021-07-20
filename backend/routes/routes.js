
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const gitDataController = require('../controllers/gitDataController');
const challengeController = require('../controllers/challengeController');
const approveController = require('../controllers/approveController');
const grassController = require('../controllers/grassController');
const mailContriller = require('../controllers/authMailController');

// <-- userCon
router.post('/signup', userController.createUser);
router.delete('/signout/:id', userController.deleteUser);
router.get('/challenge/list/:userId', userController.getChallengeList);
router.patch('/challengeOut/user', userController.outChallenge);
router.post('/login', userController.logIn);
router.post('/logout', userController.logOut);
router.post('/auth/jwtvalidcheck', userController.verifyToken);
router.get('/user/uniqueid/:userId', userController.checkIdDupl);
// userCon -->

// <-- mailCon
router.post('/authmail/send', mailContriller.sendAuthMail);
router.post('/authmail/check', mailContriller.checkAuthNum);
// mailCon --> 

// <-- gitCrawlData
router.post('/grass', gitDataController.createInitData);
router.get('/grass', gitDataController.getData);
router.delete('/grass', gitDataController.deleteData);
router.put('/grass', gitDataController.putData);
// gitCrawlData -->

// <-- grassController 
router.get('/grass/personal', grassController.getPersonalGrass);
router.get('/grass/challenge', grassController.getChallengeGrass);
// grassController -->

router.post('/challenge', challengeController.createChallenge);
router.post('/challengeKing/:id', challengeController.whoIsKing);
router.get('/challenge/:challenge_id', challengeController.getChallengeInfo);
router.get('/challengeKing/:challenge_id', challengeController.whoIsKing);
router.get('/challengePoor/:challenge_id', challengeController.whoIsPoor);
router.patch('/challenge/:challenge_id', challengeController.fixChallengeInfo);
router.delete('/challenge/:challenge_id', challengeController.deleteChallenge);

router.patch('/challengeIn/challenge', challengeController.joinChallenge);
router.patch('/challengeOut/challenge', challengeController.outChallenge);
router.post('/invite/:challenge_id', challengeController.inviteUser);

router.post('/approve', approveController.createApprove);
router.delete('/approve/:approve_id', approveController.deleteApprove);
router.get('/approve/:approve_id', approveController.getApproveInfo);
router.patch('/approve/:approve_id', approveController.confirmApprove);
router.get('/approve/list/:ch_id', approveController.getApproveList);



router.post('/approve', approveController.createApprove);
router.delete('/approve/:approve_id', approveController.deleteApprove);
router.get('/approve/:approve_id', approveController.getApproveInfo);
router.patch('/approve/:approve_id', approveController.confirmApprove);
router.get('/approve/list/:ch_id', approveController.getApproveList);

router.post('/invite/:challenge_id', challengeController.inviteUser);


module.exports = router;

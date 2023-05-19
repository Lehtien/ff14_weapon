import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PLD.vue'),
    },
    {
      path: '/pld',
      name: 'pld',
      component: () => import('../views/PLD.vue'),
      props: true
    },
    {
      path: '/war',
      name: 'war',
      component: () => import('../views/WAR.vue')
    },
    {
      path: '/drk',
      name: 'drk',
      component: () => import('../views/DRK.vue')
    },
    {
      path: '/gnb',
      name: 'gnb',
      component: () => import('../views/GNB.vue')
    },
    {
      path: '/drg',
      name: 'drg',
      component: () => import('../views/DRG.vue')
    },
    {
      path: '/rpr',
      name: 'rpr',
      component: () => import('../views/RPR.vue')
    },
    {
      path: '/mnk',
      name: 'mnk',
      component: () => import('../views/MNK.vue')
    },
    {
      path: '/sam',
      name: 'sam',
      component: () => import('../views/SAM.vue')
    },
    {
      path: '/nin',
      name: 'nin',
      component: () => import('../views/NIN.vue')
    },
    {
      path: '/brd',
      name: 'brd',
      component: () => import('../views/BRD.vue')
    },
    {
      path: '/mcn',
      name: 'mcn',
      component: () => import('../views/MCN.vue')
    },
    {
      path: '/dnc',
      name: 'dnc',
      component: () => import('../views/DNC.vue')
    },
    {
      path: '/blm',
      name: 'blm',
      component: () => import('../views/BLM.vue')
    },
    {
      path: '/smn',
      name: 'smn',
      component: () => import('../views/SMN.vue')
    },
    {
      path: '/rdm',
      name: 'rdm',
      component: () => import('../views/RDM.vue')
    },
    {
      path: '/blu',
      name: 'blu',
      component: () => import('../views/BLU.vue')
    },
    {
      path: '/whm',
      name: 'whm',
      component: () => import('../views/WHM.vue')
    },
    {
      path: '/sch',
      name: 'sch',
      component: () => import('../views/SCH.vue')
    },
    {
      path: '/ast',
      name: 'ast',
      component: () => import('../views/AST.vue')
    },
    {
      path: '/sge',
      name: 'sge',
      component: () => import('../views/SGE.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/main-layout.vue';
import HomePage from '../pages/HomePage.vue';
import PackagePage from '../pages/PackagePage.vue';
import CategoryPage from '../pages/CategoryPage.vue';
import ExchangeRatePage from '../pages/ExchangeRatePage.vue';
import ReportPage from '../pages/ReportPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
         path : '/',
         component : MainLayout,
         children : [
           {
              path : '',
              name : 'home_page',
              component : HomePage,
              meta : {
                  page_name : 'ផ្ទាំងដើម',
                 
              }
           },
           {
              path : '/package',
              name : 'package_page',
              component : PackagePage,
              meta : {
                 page_name : 'កញ្ចប់ឥវ៉ាន់',
             
              }

           },
           {
              path : '/category',
              name : 'category_page',
              component : CategoryPage,
              meta : {
                 page_name : 'ប្រភេទឥវ៉ាន់',
                
              }

           },
           {
              path : '/exchange_rate',
              name : 'exchange_rate_page',
              component : ExchangeRatePage,
              meta : {
                 page_name : 'អត្រាប្តូរប្រាក់',
               
              }

           },
           {
              path : '/report',
              name : 'report_page',
              component : ReportPage,
              meta : {
                 page_name : 'របាយការណ៍',
                
              }

           },
         ]
      }
  ],
})

export default router

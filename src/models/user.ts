export class User {
  id: string;
  name: string; 
  activation_state: string;
  account_type: string;
  //principal
  projects_limit: number;
  posts_per_month: number;
  analytics_limit: number;
  CRM_limit: number;
  unlimited_posts: boolean;
  unlimited_analytics: boolean;
  unlimited_CRM:boolean;
  unlimited_projects: boolean;
  pause_collect: boolean;
  unlimited_crawling: boolean;
  crawling_quota: string; 
  
}
export interface IPost {
  id: number;
  comments: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  login?: string;
  number: number;
}

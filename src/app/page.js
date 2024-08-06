import { BreadcrumbsNav } from './components/Breadcrumbs';
import { Logo } from './components/Logo';
import { TitleSection } from './components/TitleSection';
import { VisitButton } from './components/VisitButton';
import { UpvoteButton } from './components/UpvoteButton';
import './globals.css'
export default function Home() {
  return (
    <div className="container">
      <BreadcrumbsNav />
      <div className="header">
        <Logo />
      </div>
      <TitleSection />
      <div className="footer">
      </div>
    </div>
  );
}

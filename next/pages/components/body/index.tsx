import { BodyImage } from "./body_image_slider/body_image_slider";
import { ExtractSpeeches } from "./extract_of_speeches";
import  CurrentIssues  from './current_issues/current_issue'
import AzadSpeaks from "./azad_speaks/azad_speaks";

export const AspBody = () => {
  return (
    <>
      <BodyImage />
      <ExtractSpeeches />
      <CurrentIssues/>
      <AzadSpeaks/>
    </>
  );
};

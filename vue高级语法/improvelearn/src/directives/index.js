import directiveFocus from "./focus" 
import directiveUnit from "./unit"


export default function useDirectives(app) {
  directiveFocus(app) 
  directiveUnit(app) 
}
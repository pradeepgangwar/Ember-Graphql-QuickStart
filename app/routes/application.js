import Route from "@ember/routing/route";
import { RouteQueryManager } from "ember-apollo-client";
import query from "../gql/queries/yourQuery";

export default Route.extend(RouteQueryManager, {
  model() {
    return this.get('apollo').watchQuery({ query }, "yourQuery");
  }
});
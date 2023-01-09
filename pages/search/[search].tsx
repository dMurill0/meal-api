import { useRouter } from "next/router";
import React from "react";

type Props = {};

function search({}: Props) {
  const router = useRouter()
  const query = router.query.search;
  return <div>{query}</div>;
}

export default search;

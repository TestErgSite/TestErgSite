import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { typesEn } from "../Data/TypeDescriptionEn";
import { typesRu } from "../Data/TypeDescriptionRu";

export const MyPagination = ({ characteristicId, onPageChange }) => {
  const { i18n } = useTranslation();
  const types = i18n.language === "en" ? typesEn : typesRu;

  const pagesCount = useMemo(() => {
    const { characteristic } = types.find(
      ({ id }) => id === Number(characteristicId)
    );
    let res = 0;
    characteristic.forEach(({ subcategories }) => {
      subcategories.forEach(({ description, subcategory_name }) => {
        res++;
      });
    });
    return res;
  }, [types]);
  if (!characteristicId) return null;
  return (
    <Stack mt={2} spacing={2}>
      <Pagination
        count={pagesCount}
        shape="rounded"
        siblingCount={10}
        boundaryCount={10}
        hidePrevButton
        hideNextButton
        onChange={(_, pageNumber) => onPageChange(pageNumber - 1)}
      />
    </Stack>
  );
};

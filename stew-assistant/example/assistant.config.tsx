import { useEffect, useMemo } from "stew/deps/preact/hooks.ts";
import { BasicSelect, Input } from "stew/components/mod.ts";
import { Zod } from "stew/deps/zod/mod.ts";
// @deno-types="CssModule"
import cssModule from "./MusicAssistantConfig.module.scss";

export default {
  assistantForms: [
    itemTypeStartForm(),
    artistTypeStartForm(),
    artistNameStartForm(),
  ],
};

function itemTypeStartForm() {
  return baseStartForm({
    formType: "entry",
    formKey: "itemTypeStartForm",
    formSubmit: {
      submitType: "progressive",
    },
    formFields: [],
    getInitialFormFields: () => ({
      musicItemType: {
        fieldKey: "musicItemType",
        fieldStatus: "normal",
        fieldValue: null,
      },
    }),
  });
}

function artistTypeStartForm() {
  return baseArtistStartForm({
    formType: "secondary",
    formKey: "artistTypeStartForm",
    formSubmit: {
      submitType: "progressive",
    },
    formFields: [],
  });
}

function artistNameStartForm() {
  return baseArtistStartForm({
    formType: "secondary",
    formKey: "artistNameStartForm",
    formSubmit: {
      submitType: "explicit",
      submitLabel: "next",
      submitForm: () => {
        console.log("todo: submit artistNameStartForm");
      },
    },
    formFields: [
      {
        FieldDisplay: MusicArtistNameField,
        fieldType: "simple",
        fieldKey: "musicArtistName",
        fieldLabel: "music artist name",
        fieldSubmitSchema: Zod.string(),
      },
    ],
  });
}

function baseArtistStartForm(formConfig: any) {
  const { formFields, ...remainingFormConfig } = formConfig;
  return baseStartForm({
    ...remainingFormConfig,
    formFields: [
      {
        FieldDisplay: MusicArtistTypeField,
        fieldType: "simple",
        fieldKey: "musicArtistType",
        fieldLabel: "music artist type",
        fieldSubmitSchema: Zod.union([
          Zod.literal("solo"),
          Zod.literal("group"),
        ]),
      },
      ...formFields,
    ],
  });
}

function baseStartForm(formConfig: any) {
  const { formFields, ...remainingFormConfig } = formConfig;
  return {
    ...remainingFormConfig,
    formFields: [
      {
        FieldDisplay: MusicItemTypeField,
        fieldType: "simple",
        fieldKey: "musicItemType",
        fieldLabel: "music item type",
        fieldSubmitSchema: Zod.union([
          Zod.literal("artist"),
          Zod.literal("content"),
        ]),
      },
      ...formFields,
    ],
  };
}

interface MusicArtistNameFieldProps {}

function MusicArtistNameField(props: any) {
  const { formFields, formApi } = props;
  return (
    <div className={cssModule.fieldContainer}>
      <Input
        placeholder={"music artist name"}
        value={formFields.musicArtistName.fieldValue}
        onInput={(someInputEvent: any) => {
          formApi.setField("musicArtistName", {
            fieldKey: "musicArtistName",
            fieldStatus: "normal",
            fieldValue: someInputEvent.currentTarget.value,
          });
        }}
        clearButtonProps={{
          ariaLabel: "todo",
          ariaDescription: "todo",
          onSelect: () => {
            formApi.setField("musicArtistName", {
              fieldKey: "musicArtistName",
              fieldStatus: "normal",
              fieldValue: "",
            });
          },
        }}
      />
    </div>
  );
}

interface MusicArtistTypeFieldProps {}

function MusicArtistTypeField(props: any) {
  const { formFields, formApi } = props;
  const { artistTypeOptionList, artistTypeSelectOption } = useMemo(
    () => ({
      artistTypeOptionList: [
        {
          optionLabel: "solo",
          optionValue: "solo",
        },
        {
          optionLabel: "group",
          optionValue: "group",
        },
      ],
      artistTypeSelectOption: (nextMusicArtistTypeOption: any) => {
        formApi.setField("musicArtistType", {
          fieldKey: "musicArtistType",
          fieldStatus: "normal",
          fieldValue: nextMusicArtistTypeOption.optionValue,
        });
      },
    }),
    []
  );
  const { artistTypeSelectedOption } = useMemo(
    () => ({
      artistTypeSelectedOption: artistTypeOptionList.find(
        (someArtistTypeOption) =>
          someArtistTypeOption.optionValue ===
          formFields.musicArtistType.fieldValue
      ) ?? {
        optionLabel: "select artist type",
        optionValue: null,
      },
    }),
    [formFields.musicArtistType.fieldValue]
  );
  useEffect(() => {
    if (
      formFields.musicArtistType.fieldValue === "solo" ||
      formFields.musicArtistType.fieldValue === "group"
    ) {
      formApi.replaceForm("artistNameStartForm", {
        ...formFields,
        musicArtistName: {
          fieldKey: "musicArtistName",
          fieldStatus: "normal",
          fieldValue: "",
        },
      });
    }
  }, [formFields.musicArtistType]);
  return (
    <div className={cssModule.fieldContainer}>
      <BasicSelect
        optionTypeLabel={"music artist type"}
        optionLabelKey={"optionLabel"}
        popoverAriaRole={"listbox"}
        anchorAriaLabel={`todo`}
        anchorAriaDescription={`todo`}
        optionList={artistTypeOptionList}
        selectOption={artistTypeSelectOption}
        selectedOption={artistTypeSelectedOption}
      />
    </div>
  );
}

interface MusicItemTypeFieldProps {}

function MusicItemTypeField(props: any) {
  const { formFields, formApi } = props;
  const { itemTypeOptionList, itemTypeSelectOption } = useMemo(
    () => ({
      itemTypeOptionList: [
        {
          optionLabel: "artist",
          optionValue: "artist",
        },
        // {
        //   optionLabel: "content",
        //   optionValue: "content",
        // },
      ],
      itemTypeSelectOption: (nextMusicItemTypeOption: any) => {
        formApi.setField("musicItemType", {
          fieldKey: "musicItemType",
          fieldStatus: "normal",
          fieldValue: nextMusicItemTypeOption.optionValue,
        });
      },
    }),
    []
  );
  const { itemTypeSelectedOption } = useMemo(
    () => ({
      itemTypeSelectedOption: itemTypeOptionList.find(
        (someArtistTypeOption) =>
          someArtistTypeOption.optionValue ===
          formFields.musicItemType.fieldValue
      ) ?? {
        optionLabel: "select item type",
        optionValue: null,
      },
    }),
    [formFields.musicItemType.fieldValue]
  );
  useEffect(() => {
    if (formFields.musicItemType.fieldValue === "artist") {
      formApi.replaceForm("artistTypeStartForm", {
        ...formFields,
        musicArtistType: {
          fieldKey: "musicArtistType",
          fieldStatus: "normal",
          fieldValue: null,
        },
      });
    }
    // else if (formFields.musicItemType.fieldValue === "content") {
    //   // todo
    // }
  }, [formFields.musicItemType]);
  return (
    <div className={cssModule.fieldContainer}>
      <BasicSelect
        optionTypeLabel={"music item type"}
        optionLabelKey={"optionLabel"}
        popoverAriaRole={"listbox"}
        anchorAriaLabel={`todo`}
        anchorAriaDescription={`todo`}
        optionList={itemTypeOptionList}
        selectOption={itemTypeSelectOption}
        selectedOption={itemTypeSelectedOption}
      />
    </div>
  );
}
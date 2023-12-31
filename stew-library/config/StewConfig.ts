import { ArrayOfAtLeastOne, ArrayOfOneSchema } from "../utilities/mod.ts";
import { Zod } from "../deps/zod/mod.ts";
import {
  SegmentDataset,
  SegmentDatasetSchema,
  SegmentItem,
} from "./SegmentDataset.ts";
import { SegmentSortOption } from "./SegmentModule.ts";

export interface SourceStewConfig
  extends StewConfigBase<ArrayOfAtLeastOne<SourceSegmentConfig>> {}

export function SourceStewConfigSchema(): Zod.ZodType<SourceStewConfig> {
  return StewConfigBaseSchema(ArrayOfOneSchema(SourceSegmentConfigSchema()));
}

export interface SourceSegmentConfig
  extends SegmentConfigBase<ArrayOfAtLeastOne<SourceSegmentViewConfig>> {
  segmentModulePath: string;
  segmentDataset: SegmentDataset<SegmentItem>;
}

function SourceSegmentConfigSchema(): Zod.ZodType<SourceSegmentConfig> {
  return SegmentConfigBaseSchema(
    ArrayOfOneSchema(SourceSegmentViewConfigSchema())
  ).extend({
    segmentModulePath: Zod.string(),
    segmentDataset: SegmentDatasetSchema(),
  });
}

export interface SourceSegmentViewConfig extends SegmentViewConfigBase {
  viewItemIds: Array<SegmentItem["itemId"]>;
}

function SourceSegmentViewConfigSchema(): Zod.ZodType<SourceSegmentViewConfig> {
  return SegmentViewConfigBaseSchema().extend({
    viewItemIds: Zod.array(Zod.number()),
  });
}

export interface BuildStewConfig
  extends StewConfigBase<Record<string, BuildSegmentConfig>> {
  stewBuildId: string;
}

export function BuildStewConfigSchema(): Zod.ZodType<BuildStewConfig> {
  return StewConfigBaseSchema(Zod.record(BuildSegmentConfigSchema())).extend({
    stewBuildId: Zod.string(),
  });
}

interface BuildSegmentConfig
  extends SegmentConfigBase<Record<string, BuildSegmentViewConfig>> {
  segmentIndex: number;
  segmentSortOptions: Record<string, BuildSortOptionConfig>;
}

function BuildSegmentConfigSchema(): Zod.ZodType<BuildSegmentConfig> {
  return SegmentConfigBaseSchema(
    Zod.record(BuildSegmentViewConfigSchema())
  ).extend({
    segmentIndex: Zod.number(),
    segmentSortOptions: Zod.record(BuildSortOptionConfigSchema()),
  });
}

interface BuildSortOptionConfig
  extends Pick<
    SegmentSortOption<SegmentItem>,
    "sortOptionKey" | "sortOptionLabel"
  > {
  sortOptionIndex: number;
}

function BuildSortOptionConfigSchema(): Zod.ZodType<BuildSortOptionConfig> {
  return Zod.object({
    sortOptionIndex: Zod.number(),
    sortOptionKey: Zod.string(),
    sortOptionLabel: Zod.string(),
  });
}

interface BuildSegmentViewConfig extends SegmentViewConfigBase {
  viewIndex: number;
}

function BuildSegmentViewConfigSchema(): Zod.ZodType<BuildSegmentViewConfig> {
  return SegmentViewConfigBaseSchema().extend({
    viewIndex: Zod.number(),
  });
}

interface StewConfigBase<StewSegments> {
  stewInfo: StewInfo;
  stewSegments: StewSegments;
}

function StewConfigBaseSchema<SegmentsConfigSchema extends Zod.ZodTypeAny>(
  someSegmentsConfigSchema: SegmentsConfigSchema
) {
  return Zod.object({
    stewInfo: StewInfoSchema(),
    stewSegments: someSegmentsConfigSchema,
  });
}

interface StewInfo {
  stewName: string;
  stewTagline: string;
  stewMessage: string;
  stewLinks: Array<StewLink>;
}

function StewInfoSchema(): Zod.ZodType<StewInfo> {
  return Zod.object({
    stewName: Zod.string(),
    stewTagline: Zod.string(),
    stewMessage: Zod.string(),
    stewLinks: Zod.array(StewLinkSchema()),
  });
}

interface StewLink {
  linkLabel: string;
  linkHref: string;
  linkIconSvg: string;
}

function StewLinkSchema(): Zod.ZodType<StewLink> {
  return Zod.object({
    linkLabel: Zod.string(),
    linkHref: Zod.string(),
    linkIconSvg: Zod.string(),
  });
}

interface SegmentConfigBase<SegmentViewsConfig> {
  segmentKey: string;
  segmentLabel: string;
  segmentViews: SegmentViewsConfig;
}

function SegmentConfigBaseSchema<
  SegmentViewsConfigSchema extends Zod.ZodTypeAny
>(someSegmentViewsSchema: SegmentViewsConfigSchema) {
  return Zod.object({
    segmentKey: Zod.string(),
    segmentLabel: Zod.string(),
    segmentViews: someSegmentViewsSchema,
  });
}

interface SegmentViewConfigBase {
  viewKey: string;
  viewLabel: string;
}

function SegmentViewConfigBaseSchema() {
  return Zod.object({
    viewKey: Zod.string(),
    viewLabel: Zod.string(),
  });
}

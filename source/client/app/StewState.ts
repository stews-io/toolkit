import {
  SegmentDataset,
  SegmentItem,
} from "../../../shared/types/SegmentDataset.ts";
import { SegmentModule } from "../../../shared/types/SegmentModule.ts";

export type StewState =
  | SegmentLoadedStewState
  | LoadingSegmentStewState
  | ErrorLoadingSegmentStewState;

export interface SegmentLoadedStewState extends StewStateBase<"segmentLoaded"> {
  segmentDataset: SegmentDataset<SegmentItem>;
  segmentModule: SegmentModule<SegmentItem>;
  segmentCss: string;
}

export interface LoadingSegmentStewState
  extends StewStateBase<"loadingSegment"> {}

export interface ErrorLoadingSegmentStewState
  extends StewStateBase<"errorLoadingSegment"> {}

interface StewStateBase<SegmentStatus extends string> {
  segmentStatus: SegmentStatus;
  segmentKey: string;
  segmentSortKey: string;
  segmentViewKey: string;
  viewSearchQuery: string;
  viewPageIndex: number;
}
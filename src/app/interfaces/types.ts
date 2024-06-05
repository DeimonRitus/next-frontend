export interface storyData {
  id: number,
    deleted: boolean,
    by: string,
    time: bigint | number,
    text: string | null,
    dead: boolean,
    parent: number,
    poll: any,
    kids: any,
    url: string | null,
    score: number,
    title: string,
    parts: any,
    descendants: number
}

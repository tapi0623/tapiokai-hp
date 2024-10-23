import { ArticleCard } from "@/features/LatestArticles/presenter";
import { Divider } from "@nextui-org/divider";
import hakoneImage from "@/../public/hakone.png";
import zaohImage from "@/../public/zaoh.png"
export function LatestArticles() {
  return (
    <>
      <div className="space-y-1">
        <h4 className="text-2xl">最近の記事</h4>
      </div>
      <Divider className="my-4" />
      <div className="grid grid-cols-3 gap-4">
        <div>
          <ArticleCard
            genre="プログラミング"
            title="Go lang使ってみた!"
            alt="Go lang使ってみた"
            src="https://nextui.org/images/card-example-4.jpeg"
          />
        </div>
        <div>
          <ArticleCard genre="旅行記" title="箱根を歩く" alt="箱根を歩く" src={hakoneImage} />
        </div>
        <div>
          <ArticleCard genre="旅行記" title="12月の蔵王" alt="蔵王スキー紀" src={zaohImage} />
        </div>
      </div>
    </>
  );
}

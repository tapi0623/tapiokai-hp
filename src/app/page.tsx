import { LatestArticles } from "@/features";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";

export default function Home() {
  return (
    <>
      <p className="font-bold text-center text-6xl antialiased md:subpixel-antialiased">tapiokai.netへようこそ</p>
      <Spacer y={5} />
      <p className="text-center text-lg">技術系のBlog, 旅行記などを不定期に書いたり書かなかったりします。</p>
      <Spacer y={5} />
      <LatestArticles />
    </>
  );
}

chcp 65001

:: 先push生成文档
call npm run dbuild
cd ./docs/.vuepress/dist
git init
git add *
git commit -m"迁移到/A320FM/下"
git push -f git@github.com:320wuyanzu/A320FM.git master:gh-pages

:: 再push源文档
cd ../../../
git add *
git commit -m"迁移到/A320FM/下"
git push -f git@github.com:320wuyanzu/A320FM.git master:master
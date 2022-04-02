# build
#npm run build

# navigate into the build output directory
#cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

#git init
#git add -A
#git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:<mohammadzaidhussain>/mohammadzaidhussain>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
 #git push -f git@github.com:<mohammadzaidhussain>/<smart-vps>.git main:gh-pages

#cd -

git push -d origin gh-pages

git checkout --orphan gh-pages

npm run build

git --work-tree dist add --all

git --work-tree dist commit -m 'deployment'

git push origin HEAD:gh-pages --force

rm -r dist

git checkout -f feature-development

git branch -D gh-pages
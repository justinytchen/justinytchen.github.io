if [ "$#" -ne 1 ]; then
    echo "Illegal number of parameters"
    exit 1
fi

git add $1
git commit -m "updated resume"
git push origin dev
npm run deploy
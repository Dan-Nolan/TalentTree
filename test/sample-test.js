const { assert } = require("chai");

describe("Game", function() {
  let game;
  before(async () => {
    const Game = await ethers.getContractFactory("Game");
    game = await Game.deploy();
    await game.deployed();
  });

  it("should allow a level up", async function() {
    const [addr1] = await ethers.provider.listAccounts();

    await game.levelUp(addr1);

    const warriorCID = "bafyreigrpp6anjwbz37xy33ffyonebhxvt5ngfukjvyjpwflzhaj254cra";

    const tx = await game.chooseTalent(warriorCID);
    const receipt = await tx.wait();
    const talentChosen = receipt.events.find(x => x.event === "TalentChosen");

    console.log(talentChosen);

    console.log(talentChosen.args[1].constructor());

    assert(await game.talents(addr1, warriorCID));
  });
});

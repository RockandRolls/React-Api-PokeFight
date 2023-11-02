import { Card, CardFooter, CardBody, Image, Divider } from "@nextui-org/react";
import AttackBtn from "./AttackBtn";
import HPBar from "./HPBar";

export default function BattleCard({ name, sprite, type, base }) {
    return (
        <Card className="py-4">
            <CardBody className="overflow-visible py-2">
                <Image
                    alt={name.english}
                    className="object-cover rounded-xl"
                    src={sprite}
                    width={270}
                />
            </CardBody>
            <Divider className="mb-2" />
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-center">
                <h4 className="font-bold text-large">{name.english}</h4>
                <HPBar {...base} />
                <div className="flex gap-4">
                    <AttackBtn type="Base" />
                    {type.map((typing) => (
                        <AttackBtn key={crypto.randomUUID()} type={typing} />
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}

export class Node<T> {
  public readonly id: string;
  public readonly value: T;

  private readonly incoming = new Set<string>();
  private readonly outgoing = new Set<string>();

  constructor(id: string, value: T) {
    this.id = id;
    this.value = value;
  }

  addIncoming(id: string): void {
    this.incoming.add(id);
  }

  removeIncoming(id: string): void {
    this.incoming.delete(id);
  }

  addOutgoing(id: string): void {
    this.outgoing.add(id);
  }

  removeOutgoing(id: string): void {
    this.outgoing.delete(id);
  }

  getIncoming(): readonly string[] {
    return [...this.incoming];
  }

  getOutgoing(): readonly string[] {
    return [...this.outgoing];
  }

  hasIncoming(id: string): boolean {
    return this.incoming.has(id);
  }

  hasOutgoing(id: string): boolean {
    return this.outgoing.has(id);
  }

  get inDegree(): number {
    return this.incoming.size;
  }

  get outDegree(): number {
    return this.outgoing.size;
  }
}